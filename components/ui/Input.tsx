import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  id: string;
  type?: string;
  label: string;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({
  errorMessage,
  id,
  type = "text",
  label,
  placeholder = "",
  ...props
}) => {
  return (
    <fieldset className="w-full space-y-2">
      <label htmlFor={id} className="flex flex-row justify-between items-end">
        <span className="text-black font-medium ">{label}</span>
        <span className="text-red text-xs text-end flex ">{errorMessage}</span>
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full px-3 py-3 rounded-xl focus-within:bg-gray focus-within:ring-0 focus-within:outline-0 bg-white border border-black/20 text-black transition-all block"
        {...props}
      />
    </fieldset>
  );
};
