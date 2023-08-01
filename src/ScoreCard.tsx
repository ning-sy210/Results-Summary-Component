export type T_ScoreCard = {
  category: string;
  score: number;
  icon: string;
};

const ScoreCard = ({ category, score, icon }: T_ScoreCard) => {
  const cn = `score-card-${category.toLowerCase()}`;

  return (
    <div className={`vcsb score-card ${cn}`}>
      <div className="vc score-card--label">
        <img src={icon} title={`${category} Icon`} />
        <span>{category}</span>
      </div>

      <div className="cat-score-ctn">
        <span className="cat-score">{score}</span>
        <span className="cat-max-score">&nbsp;&nbsp;/ 100</span>
      </div>
    </div>
  );
};

export default ScoreCard;
