const PickADice = (props) => {
  const { setNewNumber } = props;

  const roll6Sider = () => {
    setNewNumber(() => {
      return Math.floor(Math.random() * (6 - 1 + 1) + 1);
    });
  };

  const roll20Sider = () => {
    setNewNumber(() => {
      return Math.floor(Math.random() * (20 - 1 + 1) + 1);
    });
  };
  return (
    <section id="DiceSelection">
      <button onClick={() => roll6Sider()}>6-sides</button>
      <button onClick={() => roll20Sider()}>20-sides</button>
    </section>
  );
};

export default PickADice;
