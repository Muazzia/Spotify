import useFetchMusic from "../hooks/useFetechMusic";
import Header from "./Header";
import MainMusic from "./MainMusic";

const Main = () => {
  const { data, loading } = useFetchMusic();
  console.log(loading);

  return (
    <main className="bg-neutral-900 ">
      <Header />
      <div className="p-2">
        <p>Newest Songs</p>
        <p className="text-sm text-neutral-300">List of Songs</p>
      </div>
      <div className="p-2 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-y-4 gap-x-2">
        {loading
          ? "Loading..."
          : data.map((music, i) => <MainMusic key={i} data={music} />)}
      </div>
    </main>
  );
};

export default Main;
