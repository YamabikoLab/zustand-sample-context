import React from "react";
import { useMyStore, useMyStoreApi } from "../store/useMyStore";

const Counter = (): JSX.Element => {
  const { count, inc } = useMyStore();
  const store = useMyStoreApi();
  store.subscribe(() => {
    console.log("count is changed", store.getState().count);
  });

  return (
    <div>
      {count} <button onClick={inc}>+1</button>
    </div>
  );
};

export default Counter;
