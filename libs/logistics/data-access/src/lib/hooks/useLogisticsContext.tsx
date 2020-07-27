import React, { createContext, useReducer, useContext, Dispatch } from "react";
import { OpenCommitmentActions, mainReducer, InitialStateType, initialState } from '../state';

const LogisticsContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<OpenCommitmentActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const LogisticsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <LogisticsContext.Provider value={{ state, dispatch }}>
      {children}
    </LogisticsContext.Provider>
  );
};

const useLogistics = () => {
  const context = useContext(LogisticsContext);
  if (!context) {
      throw new Error('useLogistics must be used within an PlannerProvider.');
  }
  return context;
};

export { LogisticsProvider, useLogistics };
