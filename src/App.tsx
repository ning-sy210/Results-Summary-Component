import "./App.scss";
import cards from "./assets/data.js";

import ScoreCard, { T_ScoreCard } from "./ScoreCard.js";

function calcAverageScoreOfCards(cards: T_ScoreCard[]): number {
  return Math.floor(
    cards.reduce((acc, curr) => acc + curr.score, 0) / cards.length
  );
}

function App() {
  return (
    <div className="app stack-hvc">
      <div className="summary-ctn">
        <div className="result-display stack-hc">
          <p className="your-result">Your Result</p>

          <div className="score-display stack-hvc">
            <span className="score text__white">
              {calcAverageScoreOfCards(cards)}
            </span>
            <span className="max-score">of 100</span>
          </div>

          <div className="text-content stack-hc">
            <span className="text__white">Great</span>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>

        <div className="result-summary stack">
          <div className="all-scores-ctn stack">
            <span className="summary-label">Summary</span>
            <div className="score-summary-ctn stack">
              {cards.map((card) => (
                <ScoreCard
                  key={card.category.toLowerCase()}
                  category={card.category}
                  score={card.score}
                  icon={card.icon}
                />
              ))}
            </div>
          </div>

          <button type="button">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
