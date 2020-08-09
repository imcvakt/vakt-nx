// action types
type ToggleModal = { type: 'ToggleModal' } 
export type MovementActions = ToggleModal;

// reducer
export interface MovementStateType {
  isModalOpen: boolean
};

export const movementInitialState: MovementStateType = {
  isModalOpen: false,
};

const toggleModal = (state: MovementStateType) => { 
  const isModalOpen = !state.isModalOpen
  return {
    ...state,
    isModalOpen
  }
};

export const movementReducer = (state: MovementStateType, action: MovementActions): MovementStateType => {
  switch (action.type) {
    case 'ToggleModal':
        return toggleModal(state);
    default:
      return state;
  }
};
