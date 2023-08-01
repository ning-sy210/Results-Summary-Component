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
      <div key={key} className={`d-flex score-card ${key}`}>
        <img src={card.icon} />
        <span>{card.category}</span>
        <div>
          <span>{card.score}</span>
          <span> / 100</span>
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

        <div className="result-summary">
          <span>Summary</span>
          <div>{cards.map((card) => makeScoreCard(card))}</div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
