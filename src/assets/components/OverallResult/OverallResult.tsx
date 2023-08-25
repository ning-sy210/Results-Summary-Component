import "./OverallResult.scss";

type OverallResultProps = {
  result: number;
};

const OverallResult = ({ result }: OverallResultProps) => {
  return (
    <div className="overall-result stack-hc">
      <span className="result-text">Your Result</span>

      <div className="result-circle-display stack-hvc">
        <span className="score text--white">{result}</span>
        <span className="max-score">of 100</span>
      </div>

      <div className="performance-text stack-hc">
        <span className="text--white">Great</span>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default OverallResult;
