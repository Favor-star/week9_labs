"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { signUpSchema, SignUpSchemaProps } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Github,
  Loader2,
  Square,
  SquareCheckBig,
  TriangleAlert,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { signUp } from "@/utils";
import { SubmitHandler, useForm } from "react-hook-form";
export const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm<SignUpSchemaProps>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpSchemaProps> = async (data) => {
    const errorMessage = await signUp({
      email: data.email,
      password: data.password,
      name: data.name,
    });
    if (errorMessage) {
      setError("root", { message: errorMessage });
      return;
    }
    router.push("/login");
  };
  return (
    <form className="w-full space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Full name"
        type="text"
        placeholder="e.g: Favor Eliab"
        id="fullName"
        {...register("name")}
        errorMessage={errors.name && errors.name.message}
      />
      <Input
        id="userEmail"
        label="Email"
        type="email"
        placeholder="favor@gmail.com"
        {...register("email")}
        errorMessage={errors.email && errors?.email?.message}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        placeholder="*******"
        title="It must contain at least 8 character, one uppercase, one lowercase, and one special character"
        {...register("password")}
        errorMessage={errors.password && errors?.password?.message}
      />
      <Input
        label="Confirm Password"
        id="confirmPassword"
        type="password"
        placeholder="*******"
        {...register("confirmPassword")}
        errorMessage={errors.confirmPassword && errors.confirmPassword.message}
      />

      {/* <br /> */}
      {errors.root && (
        <div className="px-3 py-4 bg-red/20 border border-red flex items-center justify-start gap-2 text-red rounded-xl w-full">
          <TriangleAlert strokeWidth={1.3} size={24} />
          {errors.root && errors.root.message}
        </div>
      )}
      <Button className="w-full py-3" type="submit" disabled={isSubmitting}>
        {isSubmitting && (
          <Loader2
            strokeWidth={1.2}
            size={20}
            className="animate-spin transition-all"
          />
        )}
        Sign Up
      </Button>
      <Link
        href="/login"
        className="text-action/70 hover:underline transition-all text-end block w-full px-2"
      >
        Already have an account? Sign In
      </Link>
      {/* <p className="w-full text-center text-lg text-black/50">or</p>
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
      </Button> */}
    </form>
  );
};
