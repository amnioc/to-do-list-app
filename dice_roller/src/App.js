import "./App.css";
import Header from "./components/Header";
import RollButton from "./components/RollButton.js";
import Description from "./components/Description";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <RollButton />
    </div>
  );
}

export default App;
