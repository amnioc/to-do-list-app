const Header = () => {
  return (
    <>
      <h1>Getting Stuff Done!</h1>
      <section>
        <h2>
          This is your own personal <span>To-Do List</span>. Oldest tasks at the
          top, add a new one using the form at the bottom.
        </h2>
        <h3>
          Finished a task? <span id="congrats">Congrats!</span> Remove it using
          the checkbox.
        </h3>
      </section>
    </>
  );
};

export default Header;
