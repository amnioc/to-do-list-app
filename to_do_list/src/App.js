import "./App.css";

import Header from "./components/Header";
import { useEffect, useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/InputForm";
import PopUpMessage from "./components/PopUp";

function App() {
  const [currentList, updateList] = useState([]);
  const [userAction, setUserAction] = useState("");
  const [thisTask, setThisTask] = useState("");

  useEffect(() => {
    const data = window.localStorage.getItem("taskMemory");
    if (data !== null) {
      updateList(JSON.parse(data));
    } else {
      updateList([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("taskMemory", JSON.stringify(currentList), [
      currentList,
    ]);
  });

  return (
    <section className="App">
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
    </section>
  );
}

export default App;
