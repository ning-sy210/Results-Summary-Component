export type ScoreDisplayProps = {
  category: string;
  score: number;
  icon: string;
};

const ScoreDisplay = ({ category, score, icon }: ScoreDisplayProps) => {
  const catLowerCase = category.toLowerCase();

  return (
    <div className={`vcsb score-card score-card-${catLowerCase}`}>
      <div className="vc score-card--label">
        <img src={icon} title={`${category} Icon`} />
        <span>{category}</span>
      </div>

      <div className="vcsb cat-score-ctn">
        <span className="cat-score">{score}</span>
        <span className="cat-max-score">/ 100</span>
      </div>

      <div className={`top left corner corner__top-left`}></div>
      <div className={`top right corner corner__top-right`}></div>
      <div className={`bot left corner corner__bot-left`}></div>
      <div className={`bot right corner corner__bot-right`}></div>
    </div>
  );
};

export default ScoreDisplay;
