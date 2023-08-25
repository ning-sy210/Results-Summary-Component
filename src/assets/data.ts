import IconReaction from "./images/icon-reaction.svg";
import IconMemory from "./images/icon-memory.svg";
import IconVerbal from "./images/icon-verbal.svg";
import IconVisual from "./images/icon-visual.svg";
import { ScoreDisplayProps } from "./components/ScoreBreakdown/ScoreDisplay/ScoreDisplay";

const ScoreDisplays: ScoreDisplayProps[] = [
  {
    categoryLabel: "Reaction",
    score: 80,
    icon: IconReaction,
  },
  {
    categoryLabel: "Memory",
    score: 92,
    icon: IconMemory,
  },
  {
    categoryLabel: "Verbal",
    score: 61,
    icon: IconVerbal,
  },
  {
    categoryLabel: "Visual",
    score: 72,
    icon: IconVisual,
  },
];

export default ScoreDisplays;
