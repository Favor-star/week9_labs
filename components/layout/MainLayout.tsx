import { FC, PropsWithChildren } from "react";
import { Navbar } from "./Navbar";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="w-full pb-14">
      <Navbar />
      {children}
    </main>
  );
};
