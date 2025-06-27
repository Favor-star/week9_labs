import NextAuth, { DefaultSession } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { loginSchema } from "@/schemas";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default NextAuth({
  providers: [
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
        console.log(error?.message);
        if (error) throw error;
        console.log(data.user);
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
  callbacks: {
    async jwt({ token, user, account }) {
      console.log("Account: ", account);
      console.log("user=> ", user);
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.email?.includes("@gmail.com") ? "user" : "admin";
      }
      return token;
    },
    async session({ session, token }) {
      console.log(session);
      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.id = String(token.id ?? "");
        session.user.role = String(token.role ?? "");
      }
      return session;
    },
    
  },
});
