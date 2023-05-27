const TaskList = (props) => {
  const { currentList, updateList, setUserAction, setThisTask } = props;
  const deleteTask = (task) => {
    setUserAction("removed");
    setThisTask(task);
    const taskIndex = currentList.indexOf(task);
    updateList((currentList) => {
      return [...currentList].filter((tasks, index) => index !== taskIndex);
    });
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
