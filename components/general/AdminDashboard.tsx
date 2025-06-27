import React from "react";

export const AdminDashboard = () => {
  return (
    <section className="w-full max-w-screen-lg ">
      <p className="text-base text-black/50 mb-5">
        Manage all registered users within the system
      </p>
      <section className="w-full overflow-hidden rounded-xl border border-black/30">
        <div className="grid grid-cols-[1fr_1fr_200px] grid-flow-row py-3 px-3">
          <p className="font-bold">Text</p>
          <p className="font-bold">Email</p>
          <p className="font-bold">Role</p>
        </div>

        {Array(6)
          .fill(null)
          .map((_, i) => (
            <div
              className="grid grid-cols-[1fr_1fr_200px] grid-flow-row py-5 px-3 border-t border-black/30"
              key={i}
            >
              <p className="font-normal">Stephanie carter</p>
              <p className="font-normal">stephaniecarter@mail.com</p>
              <p className="font-normal w-full rounded-full bg-gray flex text-center justify-center py-1">
                User
              </p>
            </div>
          ))}
      </section>
    </section>
  );
};
