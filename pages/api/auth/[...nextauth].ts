import NextAuth, { DefaultSession } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { loginSchema } from "@/schemas";
import { createClient } from "@supabase/supabase-js";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsedCredentials = loginSchema.safeParse(credentials);
        if (!parsedCredentials.success) return null;
        const { email, password } = parsedCredentials.data;
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        return {
          id: data.user.id,
          email: data.user.email,
          name: data.user.user_metadata.name,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/login", // Redirect to login page on error
  },
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.email?.includes("@gmail.com") ? "user" : "admin";

        // // Handle GitHub provider specifically
        // if (account?.provider === "github") {
        //   token.githubId = user.id;
        //   token.avatar_url = (user as any).avatar_url;
        //   token.login = (user as any).login;
        // }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.id = String(token.id ?? "");
        session.user.role = String(token.role ?? "");

        // // Add GitHub-specific data to session
        // if (token.avatar_url) {        //   session.user.image = String(token.avatar_url);
        // }
        // if (token.login) {
        //   session.user.login = String(token.login);
        // }
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Handle relative URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Handle absolute URLs that start with baseUrl
      if (url.startsWith(baseUrl)) return url;

      // Default redirect - middleware will handle role-based routing
      return `${baseUrl}/dashboard`;
    },
  },
});
