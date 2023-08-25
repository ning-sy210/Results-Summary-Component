import "./ScoreBreakdown.scss";
import ScoreDisplay, { ScoreDisplayProps } from "./ScoreDisplay/ScoreDisplay";

type scoreBreakdownProps = {
  scores: ScoreDisplayProps[];
};

const ScoreBreakdown = ({ scores }: scoreBreakdownProps) => {
  return (
    <div className="score-breakdown stack">
      <div className="score-breakdown--main stack">
        <span className="summary-label">Summary</span>
        <div className="score-breakdown--core stack">
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
