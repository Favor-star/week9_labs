import {Button} from "../ui/Button";

export const Hero = () => {
  return (
    <div
      className="max-w-[928px] mx-auto w-full min-h-[480px] rounded-xl mt-10 h-full bg-cover bg-center bg-no-repeat flex flex-col justify-end items-center"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.01), rgba(0,0,0,0.4)), url(/bg-image.png)",
      }}
    >
      <div className="w-fit px-2 space-y-3 pb-20">
        <p className="text-2xl md:text-2xl lg:text-4xl text-white font-bold">
          Welcome to AcmeCo
        </p>
        <p className="font-light text-base md:text-lg text-white text-center">
          Your friendly dashboard
        </p>
        <div className="flex gap-3 mx-auto w-fit">
          <Button>Register</Button>
          <Button className="bg-gray text-black">Login</Button>
        </div>
      </div>
    </div>
  );
};

