import { Slider } from "@/components/ui/slider";
import { AiFillBackward, AiFillForward, AiOutlinePause } from "react-icons/ai";
import Aside from "./components/Aside";
import Main from "./components/Main";
import PlayButton from "./components/PlayButton";
import store from "./store";
import { baseURL } from "./services/api";
import { useState } from "react";

function App() {
  const songId = store((s) => s.songId);
  const audio = new Audio(`${baseURL}/${songId}`);
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(isPlaying);

  return (
    <div className="font-robot grid gap-2 grid-cols-1 sm:grid-cols-[230px,1fr] py-3 mx-3 lg:mx-2 max-w-7xl xl:mx-auto xl:px-2 min-h-screen">
      <div className="relative hidden sm:block">
        <div className="h-[calc(98vh)]  fixed w-[230px]">
          <Aside />
        </div>
      </div>
      <div className="overflow-y-auto">
        <Main />
      </div>
      {songId && (
        <div
          className="fixed bottom-0 bg-zinc-800
        left-[50%] -translate-x-[50%] w-full px-2"
        >
          <div
            className="fixed bottom-0 w-[95vw] h-[80px] bg-zinc-800
    left-[50%] -translate-x-[50%] flex flex-col px-3 gap-1 py-2"
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
                  onClick={() => {
                    audio.play().then(() => setIsPlaying(true));
                  }}
                />
              )}
              <AiFillForward size={22} />
            </div>
            <Slider className="h-10 w-full " />
          </div>
        </div>
      )}
    </div>
  );
}

{
}

export default App;
