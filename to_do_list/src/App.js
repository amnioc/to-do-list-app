import "./App.css";

import Header from "./components/Header";
import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/InputForm";
import PopUpMessage from "./components/PopUp";

function App() {
  const [currentList, updateList] = useState(["food shop", "hoover"]);
  const [taskDone, setTaskDone] = useState(false);
  return (
    <div className="App">
      <Header />
      <TaskList
        updateList={updateList}
        currentList={currentList}
        setTaskDone={setTaskDone}
      />
      <NewTaskForm updateList={updateList} currentList={currentList} />
      <PopUpMessage taskDone={taskDone} />
    </div>
  );
}

export default App;
