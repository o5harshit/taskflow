import Project from "../../../../models/Project";
import { connectDB } from "../../../../lib/mongodb";
import { auth } from "../../auth/[...nextauth]/route";
import { projectSchema } from "../../../../lib/validations/project";

export async function POST(request) {
  try {
    const { name, description, status, priority, startDate, dueDate } =
      await request.json();
    const session = await auth();

    // User is not logged in
    if (!session?.user) {
      return Response.json(
        {
          message: "Unauthorized",
        },
        { status: 401 },
      );
    }

    const result = projectSchema.safeParse({name,description,status,priority,startDate,dueDate});
    if(!result.success){
      Response.json({
        message : "validation error",
        errors: result.error.issues
      },{status : 400})
    }

    await connectDB();

    const project = await Project.create({
      name,
      description,
      status,
      priority,
      startDate,
      dueDate,
      owner : session.user.id,
    }); //  need to put result.data here 

    return Response.json(
      {
        message: "Project created successfully",
        project,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        message: "Failed to create project",
      },
      { status: 500 },
    );
  }
}
