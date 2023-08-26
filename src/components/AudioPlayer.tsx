import { baseURL } from "@/services/api";
import { useEffect, useRef, useState } from "react";
import { AiFillBackward, AiFillForward, AiOutlinePause } from "react-icons/ai";
import PlayButton from "./PlayButton";
import { Slider } from "./ui/slider";
import { convertSecondsToMinutes } from "../utils";

interface Props {
  songName: string;
}

const AudioPlayer = ({ songName }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const ref = useRef<HTMLAudioElement>(null);

  const handleToggle = async () => {
    if (isPlaying) {
      ref.current?.pause();
      setIsPlaying(false);
    } else {
      await ref.current?.play();
      setIsPlaying(true);
    }
  };

  const handleSkip = (d: number) => {
    if (ref.current) {
      if (currentTime + d < 0) {
        setCurrentTime(0);
        ref.current.currentTime = 0;
      } else if (currentTime + d > ref.current?.duration) {
        setCurrentTime(ref.current.duration);
        ref.current.currentTime = ref.current.duration;
      } else {
        setCurrentTime(currentTime + d);
        ref.current.currentTime = currentTime + d;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current) {
        setCurrentTime(ref.current.currentTime);
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (currentTime === ref.current?.duration) {
      setIsPlaying(false);
    }
  }, [currentTime]);

  useEffect(() => {
    ref.current?.play();
    setIsPlaying(true);
  }, [songName]);

  const handleChange = (newTime: number) => {
    if (ref.current) {
      setCurrentTime(newTime);
      ref.current.currentTime = newTime;
    }
  };

  return (
    <div
      className=" w-full h-[90px] 
 flex flex-col px-3 py-2 "
    >
      <audio
        ref={ref}
        src={`${baseURL}/${songName}`}
        controls
        className="hidden"
      />
      <div className="flex items-center justify-center gap-3">
        <AiFillBackward
          size={22}
          onClick={() => handleSkip(-5)}
          className={"cursor-pointer"}
        />
        {isPlaying ? (
          <AiOutlinePause
            className={"cursor-pointer"}
            size={22}
            onClick={handleToggle}
          />
        ) : (
          <PlayButton onClick={handleToggle} />
        )}
        <AiFillForward
          size={22}
          onClick={() => handleSkip(5)}
          className={"cursor-pointer"}
        />
      </div>
      <div className="flex items-center gap-3">
        <p className="text-md text-zinc-200">
          {convertSecondsToMinutes(Math.floor(currentTime))}
        </p>
        <Slider
          onValueChange={(e) => handleChange(e[0])}
          value={[currentTime]}
          className="h-10 w-full cursor-pointer "
          min={0}
          max={ref.current?.duration}
        />
        <p className="text-md text-zinc-200">
          {convertSecondsToMinutes(Math.floor(ref.current?.duration || 0))}
        </p>
      </div>
    </div>
  );
};

export default AudioPlayer;
