import { createReducerContext } from '@vakt-web/shared/util';
import { openCommitmentReducer, openCommitmentInitialState } from './reducer';

export const [useOpenCommitment, OpenCommitmentProvider] =
  createReducerContext(openCommitmentReducer, openCommitmentInitialState);


