import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const { handlers } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",

      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        console.log(credentials);

        if (!email || !password) {
          return null;
        }
        await connectDB();
        const user = await User.findOne({ email });
        if (!user) {
          return null;
        }
        const checkpassword = await bcrypt.compare(password, user.password);
        if (!checkpassword) {
          return null;
        }
        return {
          email: user.email,
          id: user._id.toString(),
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  secret : process.env.AUTH_SECRET
});

export const { GET, POST } = handlers;
