import Aside from "./components/Aside";
import AudioPlayer from "./components/AudioPlayer";
import Main from "./components/Main";
import store from "./store";

function App() {
  const songId = store((s) => s.songId);

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
          className="fixed bottom-0 bg-zinc-800 w-[95vw] md:w-[97vw] lg:w-[100vw] 
        px-2 left-[50%] -translate-x-[50%]"
        >
          <AudioPlayer songName={songId} />
        </div>
      )}
    </div>
  );
}

export default App;
