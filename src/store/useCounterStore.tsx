import React from "react";
import { createContext, type ReactNode, useContext } from "react";
import { createStore, type StoreApi, useStore } from "zustand";
import { devtools } from "zustand/middleware";

interface CounterState {
  count: number;
}

interface CounterAction {
  increase: () => void;
  decrease: () => void;
}

export type CounterStore = CounterState & CounterAction;

const createCounterStore = (): StoreApi<CounterStore> =>
  createStore<CounterStore>()(
    devtools((set) => ({
      count: 0,
      increase: () => {
        set((state) => ({ count: state.count + 1 }));
      },
      decrease: () => {
        set((state) => ({ count: state.count - 1 }));
      },
    }))
  );

const CounterContext = createContext<ReturnType<
  typeof createCounterStore
> | null>(null);

export const CounterProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const store = createCounterStore();
  return (
    <CounterContext.Provider value={store}>{children}</CounterContext.Provider>
  );
};

export const useCounterStore = (): CounterStore => {
  const store = useContext(CounterContext);
  if (store === null) {
    throw new Error("no provider");
  }
  return useStore(store);
};

export const useCounterStoreApi = (): StoreApi<CounterStore> => {
  const store = useContext(CounterContext);
  if (store === null) {
    throw new Error("no provider");
  }
  return store;
};
