import { useState } from "react";

const TaskList = (props) => {
  const { currentList, updateList, setTaskDone } = props;

  const deleteTask = (task) => {
    const taskIndex = currentList.indexOf(task);
    updateList((currentList) => {
      return [...currentList].filter((tasks, index) => index !== taskIndex);
    });
    setTimeout(setTaskDone(true), 5);
  };

  return (
    <ul className="task-list">
      {props.currentList.map((task) => {
        return (
          <li key={task} className="each-task">
            <input
              type="checkbox"
              className="check-box"
              onClick={() => deleteTask(task)}
            />
            <p className="task-text">{task}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
