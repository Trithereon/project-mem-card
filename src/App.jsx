import "./styles/app.css";
import CardList from "./components/CardList";
import { useState } from "react";
import shire from "./assets/img/shire.webp";
import eye from "./assets/img/eye.webp";

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [showGameOver, setShowGameOver] = useState(false);
  const [showVictory, setShowVictory] = useState(false);

  const handleClick = (e) => {
    // e.currentTarget points to the element with the onClick function.
    // In this case: article (the card parent element).
    if (clickedCards.includes(e.currentTarget.id)) {
      setScore(0);
      setClickedCards([]);
      // Flash the eye of Sauron! Like a subtle and fast Game Over message.
      gameOverFlash();
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, e.currentTarget.id]);
      score + 1 > best ? setBest(score + 1) : null;
      if (score + 1 === 12) {
        setScore(0);
        setClickedCards([]);
        victoryFlash();
      }
    }
  };

  // duration is in milliseconds
  const gameOverFlash = (duration = 600) => {
    setShowGameOver(true);
    setTimeout(() => setShowGameOver(false), duration);
  };
  const victoryFlash = (duration = 4000) => {
    setShowVictory(true);
    setTimeout(() => setShowVictory(false), duration);
  };

  return (
    <div className="App">
      <div className="title-bar">
        <h1>Memory Card Game</h1>
        <span className="instructions">
          Click on all 12 images, but only once each!
        </span>
        <ul className="score-list">
          <li>{"Score: " + score}</li>
          <li>{"Best: " + best}</li>
        </ul>
        <h1>Lord of the Rings Edition</h1>
      </div>
      <CardList score={score} onClick={handleClick} />
      {showGameOver && (
        <div className="game-over-splash">
          <img src={eye} alt="eye" />
        </div>
      )}
      {showVictory && (
        <div className="victory-splash">
          <span className="victory-text">VICTORY</span>
          <img src={shire} alt="shire" />
        </div>
      )}
    </div>
  );
}

export default App;
