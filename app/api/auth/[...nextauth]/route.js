import { connectDB } from "../../../../lib/mongodb";
import User from "../../../../models/User";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    signIn: async ({ user, account }) => {
      if (user.email === "randomperson@gmail.com") {
        return false;
      }

      // Google login
      if (account?.provider === "google") {
        await connectDB();

        const existingUser = await User.findOne({
          email: user.email,
        });

        if (!existingUser) {
          await User.create({
            name: user.name,
            email: user.email,
            provider: "google",
          });
        }
      }

      return true;
    },
    jwt: ({ token, user }) => {
      console.log(token);
      return token;
    },
    session: ({ session, token, user }) => {
      if (session && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});

export const { GET, POST } = handlers;
