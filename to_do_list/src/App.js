import "./App.css";

import Header from "./components/Header";
import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/InputForm";
import PopUpMessage from "./components/PopUp";

function App() {
  const [currentList, updateList] = useState(["food shop", "hoover"]);
  const [userAction, setUserAction] = useState("");
  const [thisTask, setThisTask] = useState("");
  return (
    <div className="App">
      <Header />
      <TaskList
        updateList={updateList}
        currentList={currentList}
        setThisTask={setThisTask}
        setUserAction={setUserAction}
      />
      <NewTaskForm
        updateList={updateList}
        currentList={currentList}
        setThisTask={setThisTask}
        setUserAction={setUserAction}
      />
      <PopUpMessage userAction={userAction} thisTask={thisTask} />
    </div>
  );
}

export default App;
