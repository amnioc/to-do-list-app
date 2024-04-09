const Header = () => {
  return (
    <section>
      <h1 className="title">Getting Stuff Done!</h1>
        <h2>
          Welcome to your <span>To-Do List</span>. Add a task using the form at
          the bottom.
        </h2>
          <h3>
            Finished a task? <span className="key-word">Congrats!</span> Use the
            checkbox to remove it.
          </h3>
    </section>
  );
};

export default Header;
