import "./App.scss";
import scores from "../../data.js";

import { ScoreDisplayProps } from "../ScoreBreakdown/ScoreDisplay/ScoreDisplay.js";
import OverallResult from "../OverallResult/OverallResult.js";
import ScoreBreakdown from "../ScoreBreakdown/ScoreBreakdown.js";

const App = () => {
  return (
    <div className="app stack-hvc">
      <main className="summary-ctn">
        <OverallResult result={calcAverageScoreOfCards(scores)} />
        <ScoreBreakdown scores={scores} />
      </main>
    </div>
  );
};

function calcAverageScoreOfCards(cards: ScoreDisplayProps[]): number {
  return Math.floor(
    cards.reduce((acc, curr) => acc + curr.score, 0) / cards.length
  );
}

export default App;
