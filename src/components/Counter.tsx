import React from "react";
import { useMyStore } from "../store/useMyStore";

const Counter = (): JSX.Element => {
  const { count, inc } = useMyStore();

  return (
    <div>
      {count} <button onClick={inc}>+1</button>
    </div>
  );
};

export default Counter;
