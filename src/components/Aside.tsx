import { useMemo } from "react";
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import SideBarMusic from "./SideBarMusic";

const Aside = () => {
  const routes = useMemo(
    () => [
      {
        name: "Home",
        icon: <AiOutlineHome size={"1.2rem"} />,
        route: "/",
      },
      {
        name: "Search",
        icon: <BiSearchAlt2 size={"1.2rem"} />,
        route: "/search",
      },
    ],
    []
  );
  return (
    <aside className="space-y-2 hidden sm:flex flex-col h-full">
      <Sidebar className="space-y-5 py-3 ">
        {routes.map((r, i) => (
          <SidebarItem key={i}>
            {r.icon}
            <p className="text-sm text-neutral-400">{r.name}</p>
          </SidebarItem>
        ))}
      </Sidebar>
      <Sidebar className="flex-grow">
        <div className="flex items-center justify-between">
          <p className="text-sm text-neutral-400">Your Library</p>
          <AiOutlinePlus size="1.1rem" />
        </div>
        <p className="text-xs mt-2 text-neutral-200">List of Songs</p>
        <div>
          <SideBarMusic />
        </div>
      </Sidebar>
    </aside>
  );
};

export default Aside;
