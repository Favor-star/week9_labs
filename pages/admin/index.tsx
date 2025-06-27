import { AdminDashboard } from "@/components/general/AdminDashboard";
import { SignOut } from "@/components/general/SignOut";
const index = () => {
  return (
    <section className="max-w-screen-lg space-y-3 mx-auto">
      <div className="w-full flex justify-between items-center">
        <p className="text-3xl font-bold py-3">Dashboard</p>
        <SignOut />
      </div>
      <AdminDashboard />
    </section>
  );
};

export default index;
