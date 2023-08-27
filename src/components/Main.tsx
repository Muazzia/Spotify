import useFetchMusic from "../hooks/useFetechMusic";
import Header from "./Header";
import MainMusic from "./MainMusic";
import { Skeleton } from "./ui/skeleton";

const Main = () => {
  const { data, loading } = useFetchMusic();

  // audio player bnana ha
  return (
    <main className="bg-neutral-900 min-h-[95vh] relative">
      <Header />
      <div className="p-2">
        <p>Newest Songs</p>
        <p className="text-sm text-neutral-300">List of Songs</p>
      </div>
      <div
        className="p-2 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-y-4 gap-x-2
      mb-[100px]
      "
      >
        {loading
          ? Array(5)
              .fill(1)
              .map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-[150px] w-[120px] lg:w-[180px]"
                />
              ))
          : data.map((music, i) => <MainMusic key={i} data={music} />)}
      </div>
    </main>
  );
};

export default Main;
