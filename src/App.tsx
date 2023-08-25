import { Slider } from "@/components/ui/slider";
import { AiFillBackward, AiFillForward } from "react-icons/ai";
import Aside from "./components/Aside";
import Main from "./components/Main";
import PlayButton from "./components/PlayButton";

function App() {
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
      <div
        className="fixed bottom-0 w-[95vw] h-[80px] bg-zinc-800
        left-[50%] -translate-x-[50%] flex flex-col px-3 gap-1 py-2"
      >
        <div className="flex items-center justify-center gap-3">
          <AiFillBackward size={22} />
          {/* <AiOutlinePause size={22} /> */}
          <PlayButton />
          <AiFillForward size={22} />
        </div>
        <Slider className="h-10 w-full " />
      </div>
    </div>
  );
}

export default App;
