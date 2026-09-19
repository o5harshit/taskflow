import Project from "../../../../models/Project";
import { connectDB } from "../../../../lib/mongodb";

export async function POST(request) {
    try {
        const {
            name,
            description,
            status,
            priority,
            startDate,
            dueDate,
        } = await request.json();

        await connectDB();

        const project = await Project.create({
            name,
            description,
            status,
            priority,
            startDate,
            dueDate,
        });

        return Response.json(
            {
                message: "Project created successfully",
                project,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);

        return Response.json(
            {
                message: "Failed to create project",
            },
            { status: 500 }
        );
    }
}