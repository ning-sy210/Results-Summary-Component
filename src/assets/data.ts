import IconReaction from "./images/icon-reaction.svg";
import IconMemory from "./images/icon-memory.svg";
import IconVerbal from "./images/icon-verbal.svg";
import IconVisual from "./images/icon-visual.svg";
import { ScoreDisplayProps } from "../ScoreDisplay";

const ScoreDisplays: ScoreDisplayProps[] = [
  {
    category: "Reaction",
    score: 80,
    icon: IconReaction,
  },
  {
    category: "Memory",
    score: 92,
    icon: IconMemory,
  },
  {
    category: "Verbal",
    score: 61,
    icon: IconVerbal,
  },
  {
    category: "Visual",
    score: 72,
    icon: IconVisual,
  },
];

export default ScoreDisplays;
