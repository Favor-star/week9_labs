import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";
import { Button } from "../ui/Button";
import { usePathname } from "next/navigation";
import Image from "next/image";
export const Navbar = () => {
  const path = usePathname();
  console.log(path);
  const isNormaPath = path === "/" || path === "/login" || path === "/register";
  return (
    <section className="w-full py-3 border-b-2 border-b-gray text-black mx-auto block">
      <nav className="max-w-screen-xl w-full mx-auto flex justify-between items-center">
        <h3 className="text-lg md:text-2xl font-bold">Acme Co</h3>
        {isNormaPath && (
          <ul className=" flex-row gap-3 items-center justify-end hidden md:flex">
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/about"}>Register</Link>
            </li>
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
        {!isNormaPath && (
          <ul className="flex gap-5 items-center justify-end text-lg">
            <li>Home</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>
              <Image
                src="/avatar.gif"
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
