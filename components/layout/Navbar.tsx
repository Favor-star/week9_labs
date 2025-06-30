import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";
import { Button } from "../ui/Button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { SignOut } from "../general/SignOut";
export const Navbar = () => {
  const path = usePathname();
  const { data } = useSession();
  const imagePath = (data && data.user.image) ?? "/avatar.gif";
  const isNormaPath = path === "/" || path === "/login" || path === "/register";

  return (
    <section className="w-full py-3 border-b-2 border-b-gray text-black mx-auto block">
      <nav className="max-w-screen-xl w-full mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h3 className="text-lg md:text-2xl font-bold cursor-pointer">
            Acme Co
          </h3>
        </Link>
        {isNormaPath && data === null && (
          <ul className=" flex-row gap-3 items-center justify-end hidden md:flex">
            <li>
              <Link href={"/register"}>
                <Button>Register</Button>
              </Link>
            </li>
            <li>
              <Link href={"/login"}>
                <Button className="bg-gray text-black">Login</Button>
              </Link>
            </li>
          </ul>
        )}
        {data !== null && path === "/" && (
          <ul className=" gap-5 items-center justify-end  hidden md:flex">
            <li>
              <Link
                className="bg-gray p-2 rounded-lg border border-black/20"
                href={"/dashboard"}
              >
                {" "}
                Dashboard
              </Link>
            </li>
          </ul>
        )}
        {(path === "/dashboard" || path === "/admin") && (
          <ul className=" gap-5 items-center justify-end  hidden md:flex">
            <li>
              <SignOut />
            </li>
            <li>
              <Image
                src={imagePath}
                alt="Avatar placeholder"
                width={50}
                height={50}
                className="w-10 h-10 aspect-square object-contain rounded-full"
              />
            </li>
          </ul>
        )}
        <Menu size={24} strokeWidth={1.3} className="block md:hidden" />
      </nav>
    </section>
  );
};
