"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { signUpSchema, SignUpSchemaProps } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Square, SquareCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpSchemaProps>({
    resolver: zodResolver(signUpSchema),
  });
  const password = watch("password");
  const onSubmit: SubmitHandler<SignUpSchemaProps> = (data) => {
    console.log(data);
  };
  return (
    <form className="w-full space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Full name"
        type="text"
        placeholder="e.g: Favor Eliab"
        id="fullName"
        {...register("name")}
        errorMessage={errors && errors?.name?.message}
      />
      <Input
        id="userEmail"
        label="Email"
        type="email"
        placeholder="favor@gmail.com"
        {...register("email")}
        errorMessage={errors && errors?.email?.message}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        placeholder="*******"
        title="It must contain at least 8 character, one uppercase, one lowercase, and one special character"
        {...register("password")}
        errorMessage={errors && errors?.password?.message}
      />
      <Input
        label="Confirm Password"
        id="confirmPassword"
        placeholder="*******"
        {...register("confirmPassword")}
        errorMessage={errors && errors.confirmPassword?.message}
      />

      <br />
      <Button className="w-full py-3" type="submit">
        Sign Up
      </Button>

      <Link
        href="/login"
        className="text-action/70 hover:underline transition-all text-end block w-full px-2"
      >
        Already have an account? Sign In
      </Link>
      <p className="w-full text-center text-lg text-black/50">or</p>
      <Button className="bg-gray text-black w-full py-3">
        <Image
          src={"/google-fill.svg"}
          alt="Githu icon"
          width={20}
          height={20}
          className="h-[20px] w-[20px] object-contain aspect-square text-white "
        />
        Sign up with google
      </Button>
      <Button className="bg-gray text-black w-full py-3">
        <Github />
        Sign up with github
      </Button>
    </form>
  );
};
