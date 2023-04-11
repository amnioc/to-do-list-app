import "./App.css";
import NameForm from "./components/Form";
import GreetingMessage from "./components/GreetingMessage";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [currentName, updateGreeting] = useState("");
  return (
    <div className="App">
      <Header />
      <NameForm updateGreeting={updateGreeting} currentName={currentName} />
      <GreetingMessage currentName={currentName} />
    </div>
  );
}

export default App;
