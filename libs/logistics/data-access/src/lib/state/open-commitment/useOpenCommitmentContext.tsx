import { createReducerContext } from '@vakt-web/shared/util';
import { openCommitmentReducer, initialState } from './reducer';

export const [useOpenCommitment, OpenCommitmentProvider] =
  createReducerContext(openCommitmentReducer, initialState);


