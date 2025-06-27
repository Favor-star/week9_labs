import { AdminDashboard } from "@/components/general/AdminDashboard";
import { UserDashboard } from "@/components/general/UserDashboard";

const Dashboard = () => {
  return (
    <section className="max-w-screen-lg space-y-3 mx-auto">
      <p className="text-3xl font-bold py-3">Dashboard</p>
      {/* <UserDashboard /> */}
      <AdminDashboard />
    </section>
  );
};

export default Dashboard;
