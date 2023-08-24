import "./ScoreBreakdown.scss";
import ScoreDisplay, { ScoreDisplayProps } from "../../../ScoreDisplay";

type scoreBreakdownProps = {
  scores: ScoreDisplayProps[];
};

const ScoreBreakdown = ({ scores }: scoreBreakdownProps) => {
  return (
    <div className="result-summary stack">
      <div className="all-scores-ctn stack">
        <span className="summary-label">Summary</span>
        <div className="score-summary-ctn stack">
          {scores.map((score) => (
            <ScoreDisplay
              key={score.category.toLowerCase()}
              category={score.category}
              score={score.score}
              icon={score.icon}
            />
          ))}
        </div>
      </div>

      <button type="button">Continue</button>
    </div>
  );
};

export default ScoreBreakdown;
