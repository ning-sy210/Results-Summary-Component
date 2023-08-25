import "./ScoreBreakdown.scss";
import ScoreDisplay, { ScoreDisplayProps } from "./ScoreDisplay/ScoreDisplay";

type scoreBreakdownProps = {
  scores: ScoreDisplayProps[];
};

const ScoreBreakdown = ({ scores }: scoreBreakdownProps) => {
  return (
    <div className="score-breakdown stack">
      <div className="score-breakdown__main stack">
        <span className="summary-label">Summary</span>
        <div className="score-breakdown__core stack">
          {scores.map((score) => (
            <ScoreDisplay
              key={score.categoryLabel.toLowerCase()}
              categoryLabel={score.categoryLabel}
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
