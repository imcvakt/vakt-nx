import { OpenCommitment } from '../../models';

// action types
type RemoveSelection = { type: 'RemoveSelection', payload: OpenCommitment }
type AddSelection = { type: 'AddSelection', payload: OpenCommitment }
export type OpenCommitmentActions = RemoveSelection | AddSelection;

// reducer
export interface OpenCommitmentStateType {
  selected: OpenCommitment[];
  isEmpty: boolean;
};

export const openCommitmentInitialState: OpenCommitmentStateType = {
  selected: [],
  isEmpty: true,
};

const removeSelectionById = (currentSelection: OpenCommitment[], id: string) => {
  const selected = currentSelection.filter(openCommitment => id !== openCommitment.id);
  const isEmpty = selected.length === 0;

  return {
    selected,
    isEmpty
  }
};

const addSelection = (currentSelection: OpenCommitment[], newSelectedItem: OpenCommitment) => { 
  return {
    selected: [...currentSelection, newSelectedItem],
    isEmpty: false
  }
};

export const openCommitmentReducer = (state: OpenCommitmentStateType, action: OpenCommitmentActions): OpenCommitmentStateType => {
  switch (action.type) {
    case 'RemoveSelection':
        return removeSelectionById(state.selected, action.payload.id);
    case 'AddSelection':
      return addSelection(state.selected, action.payload);
    default:
      return state;
  }
};
