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
      <div className="vc score-display--label">
        <img src={icon} title={`${categoryLabel} Icon`} />
        <span>{categoryLabel}</span>
      </div>

      <div className="vcsb category-score-ctn">
        <span className="category-score">{score}</span>
        <span className="category-max-score">/ 100</span>
      </div>

      <div className={`top left corner corner__top-left`}></div>
      <div className={`top right corner corner__top-right`}></div>
      <div className={`bot left corner corner__bot-left`}></div>
      <div className={`bot right corner corner__bot-right`}></div>
    </div>
  );
};

export default ScoreDisplay;
