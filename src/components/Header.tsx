import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "./Button";
import like from "/public/images/liked.png";
import { FiPlay } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full  bg-gradient-to-b from-emerald-700 p-2 rounded-sm">
      <Top />
      <Bottom />
    </header>
  );
};

function Top() {
  const iconsClass = "bg-black text-white rounded-full p-1";
  return (
    <nav className="flex justify-between items-center">
      <div className=" gap-2 hidden sm:flex">
        <button className={iconsClass}>
          <IoIosArrowBack size={"1.5rem"} />
        </button>
        <button className={iconsClass}>
          <IoIosArrowForward size={"1.5rem"} />
        </button>
      </div>
      <div>
        <Button className="bg-transparent hover:underline">Sign Up</Button>
        <Button className="bg-white text-black font-bold hover:bg-opacity-75">
          Login
        </Button>
      </div>
    </nav>
  );
}

function Bottom() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold ">Welcome Back</h2>
      <div className="w-[200px] group  h-10 bg-white bg-opacity-20 backdrop-blur-lg rounded overflow-hidden drop-shadow-lg relative flex items-center gap-2  ">
        <div className="w-1/4 h-full">
          <img src={like} className="w-full h-full object-cover" />
        </div>
        <div className="text-sm cursor-default">Liked Songs</div>
        <button className="absolute right-3 hidden group-hover:flex bg-emerald-700 p-2 rounded-full items-center justify-center">
          <FiPlay />
        </button>
      </div>
    </div>
  );
}

export default Header;
