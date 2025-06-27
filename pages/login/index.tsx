import { LoginForm } from "@/components/forms/LoginForm";
import React from "react";

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
