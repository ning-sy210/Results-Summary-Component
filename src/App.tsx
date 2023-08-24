import "./assets/styles/main.scss";
import "./App.scss";
import scores from "./assets/data.js";

import ScoreDisplay, { ScoreDisplayProps } from "./ScoreDisplay.js";
import OverallResult from "./assets/components/OverallResult/OverallResult.js";
import ScoreBreakdown from "./assets/components/ScoreBreakdown/ScoreBreakdown.js";

const App = () => {
  return (
    <div className="app stack-hvc">
      <div className="summary-ctn">
        <OverallResult result={calcAverageScoreOfCards(scores)} />
        <ScoreBreakdown scores={scores} />
      </div>
    </div>
  );
};

function calcAverageScoreOfCards(cards: ScoreDisplayProps[]): number {
  return Math.floor(
    cards.reduce((acc, curr) => acc + curr.score, 0) / cards.length
  );
}

export default App;
