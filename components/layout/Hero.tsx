import Link from "next/link";
import { Button } from "../ui/Button";
import { useSession } from "next-auth/react";

export const Hero = () => {
  const { data } = useSession();
  return (
    <div
      className="max-w-[950px] mx-auto w-full min-h-[500px] rounded-xl mt-10 h-full bg-cover bg-center bg-no-repeat flex flex-col justify-end items-center"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(/bg-image.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-fit px-2 space-y-3 pb-20">
        <p className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
          Welcome to AcmeCo
        </p>
        <p className="font-light text-base md:text-lg text-white text-center">
          Your friendly dashboard
        </p>
        {data === null && (
          <div className="flex gap-3 mx-auto w-fit">
            <Link href={"/register"}>
              <Button>Register</Button>
            </Link>
            <Link href={"/login"}>
              <Button className="bg-gray text-black">Login</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
