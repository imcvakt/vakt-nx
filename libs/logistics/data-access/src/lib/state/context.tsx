import React, { createContext, useReducer, useContext, Dispatch } from "react";
import { OpenCommitmentActions } from './reducers/open-commitment';
import { mainReducer } from './reducers/main-reducers';
import { InitialStateType } from './reducers/main-reducers';

const initialState: InitialStateType = {
  openCommitments: [],
};

const LogisticsContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<OpenCommitmentActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const useLogistics = () => {
  const context = useContext(LogisticsContext);
  if (!context) {
      throw new Error('usePlanner must be used within an PlannerProvider.');
  }
  return context;
};

const LogisticsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <LogisticsContext.Provider value={{ state, dispatch }}>
      {children}
    </LogisticsContext.Provider>
  );
};

export { LogisticsProvider, useLogistics };
