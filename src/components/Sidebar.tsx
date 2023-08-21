import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Sidebar = ({ children, className }: Props) => {
  return (
    <aside
      className={twMerge(
        `bg-neutral-900 w-full rounded-sm px-2 py-1 `,
        className
      )}
    >
      {children}
    </aside>
  );
};

export default Sidebar;
