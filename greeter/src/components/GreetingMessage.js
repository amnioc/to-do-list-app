import ExtraMessage from "./extraMessage.js";
const GreetingMessage = (props) => {
  const { currentName } = props;
  return (
    <>
      <section id="GreetingsMessage">
        {currentName ? <h2>Hello {currentName}!</h2> : <ExtraMessage />}
      </section>
    </>
  );
};

export default GreetingMessage;
