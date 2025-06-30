import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SignUpSchemaProps } from "@/schemas";
import { createClient } from "./supabase/component";

const supabase = createClient();
export const cn = (...classname: ClassValue[]) => twMerge(clsx(classname));

export async function signUp({
  email,
  password,
  name,
}: Omit<SignUpSchemaProps, "confirmPassword">) {
  const { error, data } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: name,
      },
    },
  });
  if (error) return error.message;

  const { error: dbError } = await supabase
    .from("profiles")
    .select(`full_name, username, avatar_url`)
    .eq("id", data.user?.id)
    .single();
  if (dbError) return dbError.message;
  const {
    error: dbUpdateError,
  } = await supabase.from("profiles").upsert({
    id: data.user?.id as string,
    full_name: name,
    updated_at: new Date().toISOString(),
  });
  if (dbUpdateError) return dbUpdateError.message;
  return null;
}
