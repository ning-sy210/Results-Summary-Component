import "./App.scss";

function App() {
  return (
    <div className="app stack-hvc">
      <div className="summary-ctn">
        <div className="result-display stack-hc">
          <span>Your Result</span>

          <div className="score-display stack-hvc">
            <span>76</span>
            <span>of 100</span>
          </div>

          <div>
            <span>Great</span>
            <p>
              You scored higher than 65% of the people who have taken the tests.
            </p>
          </div>
        </div>
        <div className="result-summary"></div>
      </div>
    </div>
  );
}

export default App;
