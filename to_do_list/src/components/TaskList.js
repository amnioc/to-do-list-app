const TaskList = (props) => {
  return (
    <>
      <ul>
        {props.currentList.map((task) => {
          return (
            <li key={task}>
              <p>
                <input type="checkbox" id="thisTask" className="checkBox" />
                {task}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TaskList;
