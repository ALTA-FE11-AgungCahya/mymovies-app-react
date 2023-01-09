import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="btn bg-slate-800 w-full tracking-wider transition ease-in delay-150 hover:bg-gray-400 hover:text-zinc-800 duration-300 "
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
