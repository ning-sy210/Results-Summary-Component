import "./App.scss";

function App() {
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
        <div className="result-summary"></div>
      </div>
    </div>
  );
}

export default App;
