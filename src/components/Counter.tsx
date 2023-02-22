import React from "react";
import useCounterStore from "../store/useCounterStore";

const Counter = (): JSX.Element => {
  const { count, increase, decrease } = useCounterStore();

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
