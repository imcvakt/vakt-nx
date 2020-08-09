import { OpenCommitment } from '../../models';

// action types
type RemoveSelection = { type: 'RemoveSelection', payload: OpenCommitment }
type AddSelection = { type: 'AddSelection', payload: OpenCommitment }
export type OpenCommitmentActions = RemoveSelection | AddSelection;

// reducer
export interface InitialStateType {
  selected: OpenCommitment[];
};

export const initialState: InitialStateType = {
  selected: [],
};

export const openCommitmentReducer = (state: InitialStateType, action: OpenCommitmentActions) => {
  switch (action.type) {
    case 'RemoveSelection':
        return { selected: state.selected.filter(openCommitment => action.payload.id !== openCommitment.id)};
    case 'AddSelection':
      return { selected: [...state.selected, action.payload] };
    default:
      return state;
  }
};
