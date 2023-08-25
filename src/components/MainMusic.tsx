import store from "@/store";
import { Music } from "../hooks/useFetechMusic";
import PlayButton from "./PlayButton";

interface Props {
  data: Music;
}

const MainMusic = ({ data }: Props) => {
  const song = new Audio(`http://localhost:3000/${data.fileReference}`);
  const setSongId = store((s) => s.setSongId);
  return (
    <section className="bg-neutral-800 w-fit p-2 rounded-sm">
      <img
        src={`http://localhost:3000/${data.songImg}`}
        alt="song Image"
        className="h-[120px] w-[120px] lg:w-[180px] lg:h-[160px]  rounded-sm"
      />
      <div className="mt-2 group relative items-center justify-between flex ">
        <div>
          <p className="text-sm cursor-default">{data.title}</p>
          <p className="text-xs text-white/70 cursor-default">{data.artist}</p>
        </div>
        <PlayButton
          onClick={() => {
            setSongId(data.fileReference);
          }}
          className="h-8 w-8 hidden group-hover:block"
        />
      </div>
    </section>
  );
};

export default MainMusic;
