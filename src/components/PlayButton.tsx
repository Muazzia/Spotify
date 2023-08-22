import { ButtonHTMLAttributes, FC } from "react";
import { FiPlay } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
const PlayButton: FC<Props> = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-emerald-700 p-2 rounded-full items-center justify-center",
        className
      )}
    >
      <FiPlay />
    </button>
  );
};

export default PlayButton;
