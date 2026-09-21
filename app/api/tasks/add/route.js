import { auth } from "@/auth";
import { connectDB } from "@/lib/mongodb";
import Task from "@/models/Task";
import Project from "@/models/Project";

export async function POST(request) {
  try {
    // Get logged-in user
    const session = await auth();

    if (!session?.user?.id) {
      return Response.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const {
      projectId,
      title,
      description,
      status,
      priority,
      dueDate,
    } = await request.json();

    if (!projectId || !title) {
      return Response.json(
        {
          message: "Project ID and task title are required",
        },
        {
          status: 400,
        }
      );
    }

    await connectDB();

    // Make sure project exists
    const project = await Project.findOne({
      _id: projectId,
      owner: session.user.id,
    });

    if (!project) {
      return Response.json(
        {
          message: "Project not found or unauthorized",
        },
        {
          status: 404,
        }
      );
    }

    // Create task
    const task = await Task.create({
      title,
      description,
      status,
      priority,
      dueDate: dueDate || null,
      projectId,
      createdBy: session.user.id,
    });

    return Response.json(
      {
        message: "Task created successfully",
        task,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("CREATE TASK ERROR:", error);

    return Response.json(
      {
        message: "Failed to create task",
      },
      {
        status: 500,
      }
    );
  }
}