export type T_ScoreCard = {
  category: string;
  score: number;
  icon: string;
};

const ScoreCard = ({ category, score, icon }: T_ScoreCard) => {
  const catLowerCase = category.toLowerCase();

  return (
    <div className={`vcsb score-card score-card-${catLowerCase}`}>
      <div className="vc score-card--label">
        <img src={icon} title={`${category} Icon`} />
        <span>{category}</span>
      </div>

      <div className="cat-score-ctn">
        <span className="cat-score">{score}</span>
        <span className="cat-max-score">&nbsp;&nbsp;/ 100</span>
      </div>

      <div className={`top left corner corner-${catLowerCase}`}></div>
      <div className={`top right corner corner-${catLowerCase}`}></div>
      <div className={`bot left corner corner-${catLowerCase}`}></div>
      <div className={`bot right corner corner-${catLowerCase}`}></div>
    </div>
  );
};

export default ScoreCard;
