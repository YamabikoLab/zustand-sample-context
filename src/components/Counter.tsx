import React from "react";
import useMyStore from "../store/useMyStore";

const Counter = (): JSX.Element => {
  const { count, inc } = useMyStore();

  return (
    <div className="App">
      <h1>Counter</h1>
      <div>
        {count} <button onClick={inc}>+1</button>
      </div>
    </div>
  );
};

export default Counter;
