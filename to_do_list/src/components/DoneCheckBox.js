const DoneCheckBox = (props) => {
  const deleteTask = (event) => {
    //     console.log(props);
    //     props.updateList((props.currentList) => {
    //         return [...currentList].filter(task => task!=removedTask)
    //     })
    //     // props.updateList((props.currentList) => {
    //     //   return [...currentList]
    //     // })
  };

  return (
    <input
      type="checkbox"
      id="thisTask"
      className="checkBox"
      onClick={() => deleteTask()}
    />
  );
};

export default DoneCheckBox;
