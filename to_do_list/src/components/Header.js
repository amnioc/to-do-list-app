const Header = () => {
  return (
    <header>
      <h1 className="title">Getting Stuff Done!</h1>
      <section>
        <h2>
          This is your own personal <span>To-Do List</span>. Oldest tasks at the
          top, + add a new one using the form at the bottom.
        </h2>
      </section>
      <section>
        <h3>
          Finished a task? <span className="key-word">Congrats!</span> Remove it
          using the checkbox for a little suprise.
        </h3>
      </section>
    </header>
  );
};

export default Header;
