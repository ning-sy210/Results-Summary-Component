import "./ScoreDisplay.scss";

export type ScoreDisplayProps = {
  categoryLabel: string;
  score: number;
  icon: string;
};

const ScoreDisplay = ({ categoryLabel, score, icon }: ScoreDisplayProps) => {
  const catLowerCase = categoryLabel.toLowerCase();

  return (
    <div className={`vcsb score-display score-display-${catLowerCase}`}>
      <div className="vc score-display__label">
        <img src={icon} title={`${categoryLabel} Icon`} />
        <span>{categoryLabel}</span>
      </div>

      <div className="vcsb category-score-ctn">
        <span className="category-score">{score}</span>
        <span className="category-max-score">/ 100</span>
      </div>

      <div className={`top left corner corner--top-left`}></div>
      <div className={`top right corner corner--top-right`}></div>
      <div className={`bottom left corner corner--bottom-left`}></div>
      <div className={`bottom right corner corner--bottom-right`}></div>
    </div>
  );
};

export default ScoreDisplay;
