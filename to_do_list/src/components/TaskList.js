const TaskList = (props) => {
  const { currentList, updateList } = props;

  const deleteTask = (task) => {
    const taskIndex = currentList.indexOf(task);
    updateList((currentList) => {
      return [...currentList].filter((tasks, index) => index !== taskIndex);
    });
  };

  return (
    <>
      <ul>
        {props.currentList.map((task) => {
          return (
            <li key={task}>
              <input
                type="checkbox"
                className="checkBox"
                onClick={() => deleteTask(task)}
              />
              <p id="currentTask">{task}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TaskList;
