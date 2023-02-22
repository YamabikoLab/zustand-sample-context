import React from "react";
import "./App.css";
import Counter from "./components/Counter";

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>複数NGパターン</h1>
      <h1>カウンター1</h1>
      <Counter />
      <h1>カウンター2</h1>
      <Counter />
    </div>
  );
}

export default App;
