import { UserDataProps } from "@/pages/api/user-data";
import { GetServerSidePropsContext } from "next";

export const getUserData = async (
  context: GetServerSidePropsContext
): Promise<UserDataProps | null> => {
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
  try {
    const response = await fetch(`${baseUrl}/api/user-data`, {
      headers: {
        cookie: context.req.headers.cookie || "",
      },
    });

    if (!response.ok) {
      if (response.status === 401) return null;
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("SSR fetch failed:", error);
    return null;
  }
};
