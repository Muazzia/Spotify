import { AiFillBackward, AiFillForward, AiOutlinePause } from "react-icons/ai";
import PlayButton from "./PlayButton";
import { Slider } from "./ui/slider";
import { baseURL } from "@/services/api";
import { useEffect, useState } from "react";

interface Props {
  songName: string;
}

const AudioPlayer = ({ songName }: Props) => {
  const audio = new Audio(`${baseURL}/${songName}`);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.play();
    setIsPlaying(true);
  }, [songName]);

  return (
    <div
      className=" w-full h-[80px] 
 flex flex-col px-3 gap-1 py-2 "
    >
      <div className="flex items-center justify-center gap-3">
        <AiFillBackward size={22} />
        {isPlaying ? (
          <AiOutlinePause
            className={"cursor-pointer"}
            size={22}
            onClick={() => {
              audio.pause();
              setIsPlaying(false);
            }}
          />
        ) : (
          <PlayButton
            onClick={async () => {
              await audio.play();
              setIsPlaying(true);
            }}
          />
        )}
        <AiFillForward size={22} />
      </div>
      <Slider className="h-10 w-full " />
    </div>
  );
};

export default AudioPlayer;
