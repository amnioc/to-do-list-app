import "./App.css";
import Header from "./components/Header";
import Description from "./components/Description";
import { useState } from "react";
import PickADice from "./components/PickADice";
import ResetButton from "./components/ResetButton";
import DiceResult from "./components/DiceResult";

function App() {
  const [number, setNewNumber] = useState("-");

  return (
    <div className="App">
      <Header />
      <Description />
      <PickADice setNewNumber={setNewNumber} number={number} />
      <DiceResult setNewNumber={setNewNumber} number={number} />
      <ResetButton setNewNumber={setNewNumber} number={number} />
    </div>
  );
}

export default App;
