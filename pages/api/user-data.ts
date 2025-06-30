import userData from "@/data";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";

export type UserDataProps = typeof userData;

export default async function handlers(
  req: NextApiRequest,
  res: NextApiResponse<UserDataProps | { message: string }>
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  if (req.method === "GET") {
    return res.status(200).json(userData);
  }
  return res.status(405).json({ message: "Method not allowed" });
}
