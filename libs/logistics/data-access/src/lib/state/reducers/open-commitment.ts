import { OpenCommitment } from '../../models';

type RemoveSelection = { type: 'RemoveSelection', payload: OpenCommitment }
type AddSelection = { type: 'AddSelection', payload: OpenCommitment }
export type OpenCommitmentActions = RemoveSelection | AddSelection;

export const openCommitmentReducer = (state: OpenCommitment[], action: OpenCommitmentActions) => {
  switch (action.type) {
    case 'RemoveSelection':
        return state.filter(openCommitment => action.payload.id !== openCommitment.id);
    case 'AddSelection':
      return [...state, action.payload];
    default:
      return state;
  }
};
