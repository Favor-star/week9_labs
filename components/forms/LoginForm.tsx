import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { loginSchema, LoginSchemaProps } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Square, SquareCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { Loader2, TriangleAlert } from "lucide-react";
import { RememberMe } from "@/components/general/RememberMe";
import { useRouter } from "next/router";
import { ProvidersSignIn } from "./ProvidersSignIn";
export const LoginForm = () => {
  const router = useRouter();
  const githubError = router.query.error;
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<LoginSchemaProps> = async ({
    email,
    password,
  }) => {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.error) {
      setError("root", { message: result.error });
      return;
    }
    router.push("/dashboard");
  };

  return (
    <>
      <form className="w-full space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="loginEmail"
          label="Email"
          placeholder="e.g: favoreliab@gmail.com"
          {...register("email")}
          errorMessage={errors.email && errors.email.message}
        />
        <Input
          id="loginPassword"
          label="Password"
          type="password"
          placeholder="******"
          {...register("password")}
          errorMessage={errors.password && errors.password.message}
        />
        <RememberMe />
        {errors.root && (
          <div className="px-3 py-4 bg-red/20 border border-red flex items-center justify-start gap-2 text-red rounded-xl w-full">
            <TriangleAlert strokeWidth={1.3} size={24} />
            {errors.root && errors.root.message}
          </div>
        )}
        {githubError && (
          <div className="px-3 py-4 bg-red/20 border border-red flex items-center justify-start gap-2 text-red rounded-xl w-full">
            <TriangleAlert strokeWidth={1.3} size={24} />
            There was an error! Please try again
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
          Sign In
        </Button>
        <Link
          href="/register"
          className="text-action/70 hover:underline transition-all text-end block w-full px-2"
        >
          Don't have an account? Sign Up
        </Link>
      </form>
      <p className="w-full text-center text-lg text-black/50">or</p>
      <ProvidersSignIn />
    </>
  );
};
