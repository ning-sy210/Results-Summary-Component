import "./assets/styles/main.scss";
import "./App.scss";
import cards from "./assets/data.js";

import ScoreCard, { T_ScoreCard } from "./ScoreCard.js";
import OverallResult from "./assets/components/OverallResult/OverallResult.js";

const App = () => {
  return (
    <div className="app stack-hvc">
      <div className="summary-ctn">
        <OverallResult result={calcAverageScoreOfCards(cards)} />

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
};

function calcAverageScoreOfCards(cards: T_ScoreCard[]): number {
  return Math.floor(
    cards.reduce((acc, curr) => acc + curr.score, 0) / cards.length
  );
}

export default App;
