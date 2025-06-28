import NextAuth, { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
      id: string;
      login?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role?: string;
    login?: string;
    avatar_url?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
    login?: string;
    avatar_url?: string;
    githubId?: string;
  }
}
