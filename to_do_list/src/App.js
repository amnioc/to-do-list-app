import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/InputForm";

function App() {
  const [currentList, updateList] = useState(["food shop", "hoover"]);
  return (
    <div className="App">
      <Header />
      <TaskList currentList={currentList} />
      <NewTaskForm updateList={updateList} currentList={currentList} />
    </div>
  );
}

export default App;
