import { useState } from "react";

const NewTaskForm = ({ updateList, currentList }) => {
  const [newTask, insertNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    updateList((currentList) => {
      return [...currentList, `${newTask}`];
    });
    insertNewTask("");
  };

  return (
    <>
      <form className="TaskForm" onSubmit={handleSubmit}>
        <label htmlFor="taskInput">
          Add a new task:
          <input
            id={newTask}
            value={newTask}
            onChange={(event) => insertNewTask(event.target.value)}
          />
        </label>
        <button type="submit" id="submitButton">
          Add This Task
        </button>
      </form>
    </>
  );
};

export default NewTaskForm;
