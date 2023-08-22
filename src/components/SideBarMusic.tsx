import { FiPlay } from "react-icons/fi";
import m from "../assets/all_of_me_image.jpg";

const SideBarMusic = () => {
  return (
    <section className="mt-2 group flex items-start gap-2 relative">
      <img
        src={m}
        alt="Music Image"
        className="h-10 w-10 object-cover rounded-sm"
      />
      <div className="flex flex-col gap-[2px]">
        <p className="text-sm cursor-default">Hi</p>
        <p className="text-xs text-white/70 cursor-default">By Muaz</p>
      </div>
      <button className="absolute right-3 hidden group-hover:flex bg-emerald-700 p-2 rounded-full items-center justify-center">
        <FiPlay />
      </button>
    </section>
  );
};

export default SideBarMusic;
