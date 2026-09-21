import Project from "@/models/Project";
import { auth } from "../../auth/[...nextauth]/route";

export async function GET(_, { params }) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return Response.json(
        { message: "Not Authenticated User" },
        { status: 401 },
      );
    }
    const project = await Project.findById(params?.projectId);
    return Response.json(
      { message: "Project fetched Succesfully", project: project },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
