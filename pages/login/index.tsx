import { LoginForm } from "@/components/forms/LoginForm";
import { getServerSession } from "next-auth";
import React from "react";
import authOptions from "@/pages/api/auth/[...nextauth]";
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = (await getServerSession(
    context.req,
    context.res,
    authOptions
  )) as Session | null;
  if (session?.user) {
    // Redirect based on user role
    const destination = session.user.role === "admin" ? "/admin" : "/dashboard";
    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }
  return { props: {} };
};
const Login = () => {
  return (
    <section className="w-full max-w-screen-xs mx-auto space-y-3">
      <h3 className="py-3 text-black font-bold text-2xl text-center mt-3">
        Welcome back
      </h3>
      <LoginForm />
    </section>
  );
};

export default Login;
