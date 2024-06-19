import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { conectToDB } from "../lib/utils";
import { authConfig } from "./authconfig";
import { User } from "../lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    conectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong password!");
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.imgUrl = user.imgUrl;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.imgUrl = token.imgUrl;
      }
      return session;
    },
  },
});
