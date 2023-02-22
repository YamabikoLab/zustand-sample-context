import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import { MyProvider } from "./store/useMyStore";

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>複数OKパターン</h1>
      <h1>First Counter</h1>
      <MyProvider>
        <Counter />
      </MyProvider>
      <h1>Second Counter</h1>
      <MyProvider>
        <Counter />
      </MyProvider>
    </div>
  );
}

export default App;
