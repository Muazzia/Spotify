import Aside from "./components/Aside";
import Main from "./components/Main";

function App() {
  return (
    // <div className="font-robot grid gap-2 grid-cols-1 sm:grid-cols-[230px,1fr] py-3 mx-3 lg:mx-2 max-w-7xl  xl:mx-auto xl:px-2 min-h-screen">
    //   <Aside />
    //   <Main />
    // </div>
    <div className="font-robot grid gap-2 grid-cols-1 sm:grid-cols-[230px,1fr] py-3 mx-3 lg:mx-2 max-w-7xl xl:mx-auto xl:px-2 min-h-screen">
      <div className="relative hidden sm:block">
        <div className="h-[calc(98vh)]  fixed w-[230px]">
          <Aside />
        </div>
      </div>
      <div className="overflow-y-auto">
        <Main />
      </div>
    </div>
  );
}

export default App;
