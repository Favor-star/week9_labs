import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Github, Square, SquareCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const LoginForm = () => {
  return (
    <form action="" className="w-full space-y-3">
      <Input
        id="loginEmail"
        label="Email"
        placeholder="e.g: favoreliab@gmail.com"
      />
      <Input id="loginPassword" label="Password" placeholder="******" />
      <div className="flex gap-2 items-center">
        <Square className=" text-black/70" strokeWidth={1.3} />
        <SquareCheckBig className=" text-black/70" strokeWidth={1.3} />
        <p className="text-black/50 py-2">Remember me</p>
      </div>
      <Button className="w-full py-3"> Sign In</Button>
      <Link
        href="/register"
        className="text-action/70 hover:underline transition-all text-end block w-full px-2"
      >
        Don't have an account? Sign Up
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
        Continue with google
      </Button>
      <Button className="bg-gray text-black w-full py-3">
        <Github />
        Continue with github
      </Button>
    </form>
  );
};
