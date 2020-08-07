import * as React from "react";

const InitialState = {
  playingBeat: 0
};

const reducer = (state, action) => {
  switch (action.type) {
  }

  return state;
};

const SequenceContext = React.createContext({
  state: InitialState,
  dispatch: undefined
});

export const SequenceProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, InitialState);

  React.useEffect(() => {}, []);
  return (
    <SequenceContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SequenceContext.Provider>
  );
};

export const useSequence = () => {
  return React.useContext(SequenceContext);
};
