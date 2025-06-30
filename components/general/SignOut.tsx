import { signOut } from "next-auth/react";

export const SignOut = () => {
  const handleSignOut = () => signOut({ callbackUrl: "/login" });
  return (
    <button
      className="justify-self-end p-2 bg-gray rounded-lg border border-black/30"
      onClick={handleSignOut}
    >
      Sign out
    </button>
  );
};
