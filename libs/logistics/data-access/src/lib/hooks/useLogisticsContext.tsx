import createReducerContext from './createReducerContext';
import {initialState, rootReducer} from '../state';

export const [useLogistics, LogisticsProvider] =
  createReducerContext(rootReducer, initialState);


