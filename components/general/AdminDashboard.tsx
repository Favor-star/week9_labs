import { UserDataProps } from "@/pages/api/user-data";
import { useSession } from "next-auth/react";
import React, { FC } from "react";

type AdminDashboardProps = {
  userData: UserDataProps;
};

export const AdminDashboard: FC<AdminDashboardProps> = ({ userData }) => {
  return (
    <section className="w-full max-w-screen-lg">
      <p className="text-base text-black/50 mb-5">
        Manage all registered users within the system
      </p>
      <section className="w-full overflow-hidden rounded-xl border border-black/30">
        <div className="grid grid-cols-[1fr_1fr_200px] grid-flow-row py-3 px-3">
          <p className="font-bold">Name</p>
          <p className="font-bold">Email</p>
          <p className="font-bold">Role</p>
        </div>

        {userData.map(({ name, email, role, id }) => (
          <div
            className="grid grid-cols-[1fr_1fr_200px] grid-flow-row py-5 px-3 border-t border-black/30"
            key={id}
          >
            <p className="font-normal">{name}</p>
            <p className="font-normal">{email}</p>
            <p className="font-normal w-full rounded-full bg-gray flex text-center justify-center py-1 capitalize">
              {role}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
};
