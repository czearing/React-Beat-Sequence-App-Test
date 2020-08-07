import React from "react";
import ReactDOM from "react-dom";
import { CommandBar } from "./CommandBar";
import { SequenceView } from "./SequenceView";
import { SequenceProvider } from "./SequenceProvider";
import "./styles.css";

const InitialState = {
  playingBeat: 0,
  totalBeats: 16
};

const reducer = (state, action) => {
  return state;
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, InitialState);

  return (
    <SequenceProvider>
      <div className="App">
        <CommandBar />
        <SequenceView />
      </div>
    </SequenceProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
