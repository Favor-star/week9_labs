"use client";
import { Square, SquareCheckBig } from "lucide-react";
import { useState } from "react";
export const RememberMe = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label
      className="flex gap-2 items-center"
      onClick={() => setIsChecked(!isChecked)}
    >
      {!isChecked ? (
        <Square className=" text-black/70" strokeWidth={1.3} />
      ) : (
        <SquareCheckBig className=" text-black/70" strokeWidth={1.3} />
      )}
      <p className="text-black/50 py-2">Remember me</p>
    </label>
  );
};
