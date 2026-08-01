const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./public/logo.jpeg" width={25} alt="icon"></img>
        <h1>Character Counter</h1>
      </div>

      <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
};

export { Header };
