const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://i.ibb.co/kgr7MRNJ/logo.jpg"
          width={25}
          alt="logo"
          border="0"
        ></img>

        <h1>Character Counter</h1>
      </div>

      <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
};

export { Header };
