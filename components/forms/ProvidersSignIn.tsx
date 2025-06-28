import { Button } from "../ui/Button";
import Image from "next/image";
import { Github, Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useTransition } from "react";

export const ProvidersSignIn = () => {
  const [githubPending, startGithubTransition] = useTransition();
  const [googlePending, startGoogleTransition] = useTransition();

  const handleSignInWithGithub = () =>
    startGithubTransition(async () => {
      await signIn("github", { callbackUrl: "/dashboard" });
    });
  const handleSignInWithGoogle = () =>
    startGoogleTransition(async () => {
      signIn("google", { callbackUrl: "/dashboard" });
    });
  return (
    <>
      <Button
        className="bg-gray text-black w-full py-3"
        onClick={handleSignInWithGoogle}
      >
        {googlePending && (
          <Loader2
            strokeWidth={1.2}
            size={20}
            className="animate-spin transition-all"
          />
        )}
        {!googlePending && (
          <Image
            src={"/google-fill.svg"}
            alt="Githu icon"
            width={20}
            height={20}
            className="h-[20px] w-[20px] object-contain aspect-square text-white "
          />
        )}
        Continue with google
      </Button>
      <Button
        className="bg-gray text-black w-full py-3"
        onClick={handleSignInWithGithub}
      >
        {githubPending && (
          <Loader2
            strokeWidth={1.2}
            size={20}
            className="animate-spin transition-all"
          />
        )}
        {!githubPending && <Github />}
        Continue with github
      </Button>
    </>
  );
};
