import { create } from "zustand";

interface MyState {
  count: number;
}

interface MyAction {
  inc: () => void;
}

export type MyStore = MyState & MyAction;

const useMyStore = create<MyStore>((set) => ({
  count: 0,
  inc: () => {
    set((state) => ({ count: state.count + 1 }));
  },
}));

export default useMyStore;
