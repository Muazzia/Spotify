import m from "../assets/all_of_me_image.jpg";

const MainMusic = () => {
  return (
    <section className="bg-neutral-800 w-fit p-2 rounded-sm">
      <img
        src={m}
        alt=""
        className="h-[120px] w-[120px] lg:w-[160px] lg:h-[160px]  rounded-sm"
      />
      <div className="mt-2">
        <p className="text-sm">All of Me</p>
        <p className="text-xs text-white/70">By Muaz</p>
      </div>
    </section>
  );
};

export default MainMusic;
