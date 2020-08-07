import React from "react";
import { useSequence } from "./SequenceProvider";

const cx = (...args) => {
  return args.filter(item => !!item).join(" ");
};
console.log(cx(1, 2, 3, 4, 5, 6, 7, 7));

export const StepBeat = props => {
  const { state } = useSequence();
  const isPlaying = state.playingBeat === props.beatIndex;

  return <button className={cx("StepBeat", isPlaying && "StepBeat-playing")} />;
};
