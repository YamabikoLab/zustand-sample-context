import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import { CounterProvider } from "./store/useCounterStore";

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>複数OKパターン</h1>
      <h1>カウンター1</h1>
      <CounterProvider>
        <Counter />
      </CounterProvider>
      <h1>カウンター2</h1>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default App;
