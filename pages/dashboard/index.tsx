import { AdminDashboard } from "@/components/general/AdminDashboard";
import { SignOut } from "@/components/general/SignOut";
import { UserDashboard } from "@/components/general/UserDashboard";

const Dashboard = () => {
  return (
    <section className="max-w-screen-lg space-y-3 mx-auto">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start md:items-center">
        <p className="text-3xl font-bold py-3">Dashboard</p>
      </div>
      <UserDashboard />
      <div className="mt-12">
        <SignOut />
      </div>
    </section>
  );
};

export default Dashboard;
