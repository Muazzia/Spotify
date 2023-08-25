import { create } from "zustand";

interface Store {
  songId: string;
  setSongId: (id: string) => void;
}

const store = create<Store>((set) => ({
  songId: "",
  setSongId: (id: string) => set(() => ({ songId: id })),
}));

export default store;
