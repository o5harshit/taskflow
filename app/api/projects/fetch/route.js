import Project from "../../../../models/Project";
import { connectDB } from "../../../../lib/mongodb";
import { auth } from "../../auth/[...nextauth]/route";

export async function GET() {
  try {
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

    await connectDB();

    const project = await Project.find({});
    return Response.json(
      {
        message: "Project fetched successfully",
        project,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        message: "Failed to fetch project",
      },
      { status: 500 },
    );
  }
}
