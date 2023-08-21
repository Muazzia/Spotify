import React, { ButtonHTMLAttributes, forwardRef, Ref } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button = forwardRef(
  (
    { className, children, type = "button", ...props }: Props,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        type={type}
        ref={ref}
        className={twMerge(
          "px-2 py-1 bg-black text-white rounded-md",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
