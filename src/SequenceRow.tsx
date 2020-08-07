import React from "react";
import { StepBeat } from "./StepBeat";

export const SequenceRow = props => {
  return (
    <div className="SequenceRow">
      <div className="SampleCell">Samples</div>
      <div className="StepBar">
        <div className="StepMeasure">
          <StepBeat beatIndex={0} />
          <StepBeat beatIndex={1} />
          <StepBeat beatIndex={2} />
          <StepBeat beatIndex={3} />
        </div>
        <div className="StepMeasure">
          <StepBeat beatIndex={4} />
          <StepBeat beatIndex={5} />
          <StepBeat beatIndex={6} />
          <StepBeat beatIndex={7} />
        </div>
        <div className="StepMeasure">
          <StepBeat beatIndex={8} />
          <StepBeat beatIndex={9} />
          <StepBeat beatIndex={10} />
          <StepBeat beatIndex={11} />
        </div>
        <div className="StepMeasure">
          <StepBeat beatIndex={12} />
          <StepBeat beatIndex={13} />
          <StepBeat beatIndex={14} />
          <StepBeat beatIndex={15} />
        </div>
      </div>
    </div>
  );
};
