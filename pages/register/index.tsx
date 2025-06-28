import { RegisterForm } from "@/components/forms/RegisterForm";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

const Register = () => {
  return (
    <section className="w-full max-w-screen-xs mx-auto space-y-3">
      <h3 className="py-3 text-black font-bold text-2xl text-center mt-3">
        Welcome!
      </h3>
      <RegisterForm />
    </section>
  );
};

export default Register;
