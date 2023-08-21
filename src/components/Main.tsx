import Header from "./Header";

const Main = () => {
  return (
    <main className="bg-neutral-900 ">
      <Header />
      <div className="p-2">
        <p>Newest Songs</p>
        <p className="text-sm text-neutral-300">List of Songs</p>
      </div>
    </main>
  );
};

export default Main;
