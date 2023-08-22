import m from "../assets/all_of_me_image.jpg";
import PlayButton from "./PlayButton";

const MainMusic = () => {
  return (
    <section className="bg-neutral-800 w-fit p-2 rounded-sm">
      <img
        src={m}
        alt=""
        className="h-[120px] w-[120px] lg:w-[180px] lg:h-[160px]  rounded-sm"
      />
      <div className="mt-2 group relative items-center justify-between flex ">
        <div>
          <p className="text-sm cursor-default">All of Me</p>
          <p className="text-xs text-white/70 cursor-default">By Muaz</p>
        </div>
        <PlayButton className="h-8 w-8 hidden group-hover:block" />
      </div>
    </section>
  );
};

export default MainMusic;
