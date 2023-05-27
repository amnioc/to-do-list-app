const PopUpMessage = (props) => {
  const { taskDone } = props;

  if (taskDone) {
    return (
      <article className="celebration-message">
        <h3 className="key-word">Congrats!!</h3>;
        <img
          className="popup-image"
          alt="small white cat with flower necklace in human hand"
          href="https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </article>
    );
  }
};

export default PopUpMessage;
