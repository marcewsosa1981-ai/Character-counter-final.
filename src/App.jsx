import { useState, useEffect } from "react";
import { Header } from "./components/Header.jsx";

const App = () => {
  const [text, setText] = useState("");

  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [limitCharacter, setLimitCharacter] = useState(false);
  const [limitValue, setLimitValue] = useState(15);
  const [showAll, setShowAll] = useState(false);

  const characters = excludeSpaces
    ? text.replace(/\s/g, "").length
    : text.length;

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const sentences =
    text.trim() === ""
      ? 0
      : text.split(/[.!?]/).filter((sentence) => sentence.trim() !== "").length;

  const readingTime = Math.ceil(words / 100);

  const handleChangeTextarea = (e) => {
    const value = e.target.value;

    if (limitCharacter) {
      if (value.length <= limitValue) {
        setText(value);
      }
    } else {
      setText(value);
    }
  };

  const handleChangeInputLimit = () => {
    const newLimitState = !limitCharacter;
    setLimitCharacter(newLimitState);

    if (newLimitState) {
      setText(text.slice(0, Number(limitValue)));
    }
  };

  const cleanText = text.toLowerCase().replace(/[^a-záéíóúü]/g, "");
  const total = cleanText.length;

  const dictionaryLetters = {};

  cleanText.split("").forEach((letter) => {
    dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1;
  });

  const letters = Object.entries(dictionaryLetters).map((dataLetter) => {
    const letter = dataLetter[0];
    const amountLetter = dataLetter[1];

    const infoToRenderLetter = {
      letterName: letter,
      amount: amountLetter,
      percentage: (amountLetter / total) * 100,
    };

    return infoToRenderLetter;
  });

  const sortLetters = letters.sort((a, b) => b.amount - a.amount);

  const visibleLetters = showAll ? sortLetters : sortLetters.slice(0, 5);

  const [darkMode, setDarkMode] = useState(true);

  const [language, setLanguage] = useState("en");

  const texts = {
    en: {
      title: "Analyze your text in real-time.",
      placeholder: "Type your text here...",
      characters: "Total Characters",
      words: "Word Count",
      sentences: "Sentence Count",
      excludeSpaces: "Exclude Spaces",
      limitCharacter: "Character Limit",
      reading: "Approx. Reading Time",
      letters: "Letter Density",
      seeMore: "See more",
    },

    es: {
      title: "Analiza tu texto en tiempo real.",
      placeholder: "Escribe tu texto aquí...",
      characters: "Total de caracteres",
      words: "Cantidad de palabras",
      sentences: "Cantidad de oraciones",
      excludeSpaces: "Excluir espacios",
      limitCharacter: "Límite de caracteres",
      reading: "Tiempo de lectura",
      letters: "Cantidad de letras",
      seeMore: "Ver más",
    },
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-body");
      document.body.classList.remove("light-body");
    } else {
      document.body.classList.add("light-body");
      document.body.classList.remove("dark-body");
    }
  }, [darkMode]);

  return (
    <main className={darkMode ? "container dark" : "container light"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <h2 className="title">{texts[language].title}</h2>

      <div className="lang-toggle">
        <button onClick={() => setLanguage("en")}>ENG</button>

        <button onClick={() => setLanguage("es")}>ESP</button>
      </div>

      <textarea
        placeholder={texts[language].placeholder}
        onChange={handleChangeTextarea}
        value={text}
      ></textarea>

      <div className="options">
        <label>
          <input
            type="checkbox"
            checked={excludeSpaces}
            onChange={() => setExcludeSpaces(!excludeSpaces)}
          />
          {texts[language].excludeSpaces}
        </label>
        <label>
          <input
            type="checkbox"
            checked={limitCharacter}
            onChange={handleChangeInputLimit}
          />
          {texts[language].limitCharacter}
        </label>
        {limitCharacter && (
          <input
            type="number"
            value={limitValue}
            onChange={(e) => setLimitValue(e.target.value)}
          />
        )}

        <div className="reading-time">
          {texts[language].reading}: ◀ {readingTime} min
        </div>
      </div>
      <section className="stats">
        <div className="card purple">
          <h3>{characters}</h3>

          <p>{texts[language].characters}</p>
        </div>

        <div className="card yellow">
          <h3>{words}</h3>
          <p>{texts[language].words}</p>
        </div>

        <div className="card orange">
          <h3>{sentences}</h3>
          <p>{texts[language].sentences}</p>
        </div>
      </section>

      <section className="letters">
        <h2>{texts[language].letters}</h2>

        <article>
          {sortLetters.slice(0, 5).map((letter) => (
            <div key={letter.letterName} className="letter-row">
              <span>{letter.letterName.toUpperCase()}</span>
              <meter min="0" max="100" value={letter.percentage}></meter>
              <span>
                {letter.amount} ({letter.percentage.toFixed(1)}%)
              </span>
            </div>
          ))}
        </article>

        <details>
          <summary>{texts[language].seeMore}</summary>
          <ul className="meter-list">
            {sortLetters.slice(5, sortLetters.length).map((letter) => (
              <div key={letter.letterName}>
                <span>{letter.letterName.toUpperCase()}</span>
                <meter min="0" max="100" value={letter.percentage}></meter>
                <span>
                  {letter.amount} ({letter.percentage.toFixed(1)}%)
                </span>
              </div>
            ))}
          </ul>
        </details>
      </section>
    </main>
  );
};

export { App };
