import React from "react";
import { useCounterStore, useCounterStoreApi } from "../store/useCounterStore";

const Counter = (): JSX.Element => {
  const { count, increase, decrease } = useCounterStore();
  const store = useCounterStoreApi();
  store.subscribe(() => {
    console.log("count is changed", store.getState().count);
  });
  return (
    <div>
      {count}
      <button type="button" onClick={increase}>
        +1
      </button>
      <button type="button" onClick={decrease}>
        -1
      </button>
    </div>
  );
};

export default Counter;
