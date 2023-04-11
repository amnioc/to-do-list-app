import { useState } from "react";

const NameForm = (props) => {
  const { updateGreeting } = props;
  const [newName, enterName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    updateGreeting((currentName) => {
      return newName;
    });
    enterName("");
  };

  return (
    <section id="NameForm">
      <form onSubmit={handleSubmit}>
        <label>Enter Your First Name or Nickname:</label>
        <input
          className="input"
          value={newName}
          onChange={(event) => enterName(event.target.value)}
        />
        <button id="SubmitName" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default NameForm;
