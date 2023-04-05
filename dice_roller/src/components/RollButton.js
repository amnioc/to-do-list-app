import { useState } from "react";
import DiceResult from "./DiceResult";

const RollButton = () => {
  const [number, setNewNumber] = useState("-");
  console.log(number);
  const setNumber = () => {
    setNewNumber(() => {
      return Math.floor(Math.random() * (6 - 1 + 1) + 1);
    });
  };

  return (
    <>
      <button id="rollButton" onClick={setNumber}>
        Roll The Dice!
      </button>

      <DiceResult number={number} />
    </>
  );
};
export default RollButton;
