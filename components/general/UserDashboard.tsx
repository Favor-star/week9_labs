import React from "react";
import { Shield, Users } from "lucide-react";

export const UserDashboard = () => {
  return (
    <>
      <p className="font-bold text-xl">User information</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-[200px_1fr] grid-flow-row gap-x-5">
        <div className="py-5 border-t border-black/20">
          <p className="text-black/50">Name</p>
          <p className="text-black">Sophia Carter</p>
        </div>
        <div className="py-5 border-t border-black/20">
          <p className="text-black/50">Email</p>
          <p className="text-black">sophiacarter@gmail.com</p>
        </div>
        <div className="py-5 border-t border-black/20">
          <p className="text-black/50">Role</p>
          <p className="text-black"> Administrator</p>
        </div>
      </div>
      <p className="py-5 font-bold text-black text-xl">Navigation</p>
      <p className="flex w-full justify-between items-center">
        <span>Manage users</span>
        <Users strokeWidth={1.3} />
      </p>
      <p className="flex w-full justify-between items-center mt-5">
        <span>Manage roles</span>
        <Shield strokeWidth={1.3} />
      </p>
    </>
  );
};


