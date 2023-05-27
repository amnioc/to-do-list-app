const PopUpMessage = ({ userAction, thisTask }) => {
  if (userAction === "removed") {
    return (
      <article className="celebration-message">
        <h3 className="key-word">
          Congrats, you have completed{" "}
          <span className="key-task">{thisTask}</span>
          <span aria-label="confetti emoji">&#127881;</span>
        </h3>
      </article>
    );
  } else if (userAction === "added") {
    return (
      <article className="added-task">
        <h3 className="key-word">
          Added <span className="key-task">{thisTask}</span> to List{" "}
          <span aria-label="green tick emoji">&#9989;</span>
        </h3>
      </article>
    );
  }
};

export default PopUpMessage;
