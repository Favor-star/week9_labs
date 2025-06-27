import { cn } from "@/utils";
import React, { FC, PropsWithChildren } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren<{}>;

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "py-3 px-6 rounded-full bg-action text-white font-medium text-base flex items-center justify-center min-h-12  leading-0 hover:scale-[1.03] transition-all origin-center gap-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
