const ResetButton = (props) => {
  const { setNewNumber } = props;

  const resetScreen = () => {
    setNewNumber(() => {
      return "";
    });
  };

  return (
    <button
      onClick={() => {
        resetScreen();
      }}
    >
      Clear Result
    </button>
  );
};

export default ResetButton;
