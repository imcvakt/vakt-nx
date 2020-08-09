import { createReducerContext } from '@vakt-web/shared/util';
import { movementReducer, movementInitialState } from './reducer';

export const [useMovement, MovementProvider] =
  createReducerContext(movementReducer, movementInitialState);


