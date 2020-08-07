import React from "react";
import { SequenceHeader } from "./SequenceHeader";
import { SequenceRow } from "./SequenceRow";

export const SequenceView = props => {
  return (
    <div className="SequenceView">
      <SequenceHeader />
      <SequenceRow />
      <SequenceRow />
      <SequenceRow />
    </div>
  );
};
