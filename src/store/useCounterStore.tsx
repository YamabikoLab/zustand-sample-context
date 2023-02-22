import { create } from "zustand";

interface CounterState {
  count: number;
}

interface CounterAction {
  increase: () => void;
  decrease: () => void;
}

export type CounterStore = CounterState & CounterAction;

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increase: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  decrease: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));

export default useCounterStore;
