const DiceResult = (props) => {
  return (
    <section id="rollResult">
      You got a...<span id="rollNumber">{props.number}</span>{" "}
    </section>
  );
};

export default DiceResult;
