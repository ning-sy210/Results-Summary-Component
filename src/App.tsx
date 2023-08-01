import "./App.scss";
import cards from "./assets/data.js";

type T_ScoreCard = {
  category: string;
  score: number;
  icon: string;
};

function App() {
  function makeScoreCard(card: T_ScoreCard) {
    const key = `${card.category.toLowerCase()}-score-card`;

    return (
      <div key={key} className={`vcsb score-card ${key}`}>
        <div className="vc score-card--label">
          <img src={card.icon} title={`${card.category} Icon`} />
          <span>{card.category}</span>
        </div>

        <div>
          <span>{card.score}</span>
          <span>&nbsp;&nbsp;/ 100</span>
        </div>
      </div>
    );
  }

  return (
    <div className="app stack-hvc">
      <div className="summary-ctn">
        <div className="result-display stack-hc">
          <span className="your-result">Your Result</span>

          <div className="score-display stack-hvc">
            <span className="score text__white">76</span>
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
          <span className="summary-label">Summary</span>
          <div className="score-summary-ctn stack">
            {cards.map((card) => makeScoreCard(card))}
          </div>
          <button type="button">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
