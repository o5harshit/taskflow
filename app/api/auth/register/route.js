
import User from "../../../../models/User";
import { connectDB } from "../../../../lib/mongodb";
import bcrypt from "bcrypt"
import { registerSchema } from "../../../../lib/validations/auth";
import z from "zod";



export async function POST(request) {
  try {
    const { name, email, password, confirmPassword } = await request.json();


    if (!name || !email || !password || !confirmPassword) {
      return Response.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const result = registerSchema.safeParse({ name, email, password, confirmPassword });


    if (!result.success) {

      return Response.json(
        {
          message: "Validation failed",
          errors: z.flattenError(result.error),
        },
        {
          status: 400,
        }
      );
    }


    await connectDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return Response.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      provider: "credentials",
    }); // put result.data here coming form zod 

    return Response.json(
      {
        message: "User registered successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return Response.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}