import React from "react";
import { createContext, type ReactNode, useContext } from "react";
import { createStore, type StoreApi, useStore } from "zustand";
import { devtools } from "zustand/middleware";

interface MyState {
  count: number;
}

interface MyAction {
  inc: () => void;
}

export type MyStore = MyState & MyAction;

const createMyStore = (): StoreApi<MyStore> =>
  createStore<MyStore>()(
    devtools((set) => ({
      count: 0,
      inc: () => {
        set((state) => ({ count: state.count + 1 }));
      },
    }))
  );

const MyContext = createContext<ReturnType<typeof createMyStore> | null>(null);

export const MyProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const store = createMyStore();
  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
};

export const useMyStore = (): MyStore => {
  const store = useContext(MyContext);
  if (store === null) {
    throw new Error("no provider");
  }
  return useStore(store);
};

export const useMyStoreApi = (): StoreApi<MyStore> => {
  const store = useContext(MyContext);
  if (store === null) {
    throw new Error("no provider");
  }
  return store;
};
