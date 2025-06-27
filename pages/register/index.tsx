import { RegisterForm } from "@/components/forms/RegisterForm";
import React from "react";

const Register = () => {
  return (
    <section className="w-full max-w-screen-xs mx-auto space-y-3">
      <h3 className="py-3 text-black font-bold text-2xl text-center mt-3">
        Welcome!
      </h3>
      <RegisterForm />
    </section>
  );
};

export default Register;
