import { useState } from "react";

const NewTaskForm = ({
  updateList,
  currentList,
  setUserAction,
  setThisTask,
}) => {
  const [newTask, insertNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    updateList((currentList) => {
      return [...currentList, `${newTask}`];
    });
    insertNewTask("");
    setUserAction("added");
    setThisTask(newTask);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="taskInput" className="input-label">
        Add a new task:
        <input
          id={newTask}
          className="task-input"
          value={newTask}
          onChange={(event) => insertNewTask(event.target.value)}
          required
        />
      </label>
      <button type="submit" className="button">
        Add This Task
      </button>
    </form>
  );
};

export default NewTaskForm;
