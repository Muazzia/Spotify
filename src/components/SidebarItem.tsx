import { twMerge } from "tailwind-merge";
interface Props {
  children: React.ReactNode;
  className?: string;
}

const SidebarItem = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge("flex gap-2 bg-transparent items-center ", className)}
    >
      {children}
    </div>
  );
};

export default SidebarItem;
