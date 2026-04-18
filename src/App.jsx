import "./styles/app.css";
import CardList from "./components/CardList";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const handleClick = (e) => {
    // e.currentTarget points to the element with the onClick function.
    // In this case: article.
    console.log(e.currentTarget.id);
    /*
     Game logic:
     1. If clickedCards has target card id, reset score to 0. Game Over.
     2. If clickedCards does not have target card id:
        1. score++
            1. If score > best, best = score.
            2. If score === 12, display victory alert or modal.
        2. Add target card id to clickedCards array.
    */
    if (clickedCards.includes(e.currentTarget.id)) {
      setScore(0);
      setClickedCards([]);
      // Flash the eye of Sauron! Like a subtle and fast Game Over message.
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, e.currentTarget.id]);
      score + 1 > best ? setBest(score + 1) : null;
    }
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
    </div>
  );
}

export default App;
