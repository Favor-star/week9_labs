import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classname: ClassValue[]) => twMerge(clsx(classname));
