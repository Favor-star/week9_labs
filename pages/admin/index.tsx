import { AdminDashboard } from "@/components/general/AdminDashboard";
import { SignOut } from "@/components/general/SignOut";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import { getUserData } from "@/utils/data";

type UserData = {
  name: string;
  email: string;
  role: string;
};
export const getServerSideProps = (async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  const userData = (await getUserData(context)) ?? [];
  return {
    props: { userData },
  };
}) satisfies GetServerSideProps<{ userData: UserData[] }>;

function index({
  userData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <section className="max-w-screen-lg space-y-3 mx-auto">
      <div className="w-full flex justify-between items-center">
        <p className="text-3xl font-bold py-3">Dashboard</p>
        <SignOut />
      </div>
      <AdminDashboard userData={userData} />
    </section>
  );
}

export default index;
