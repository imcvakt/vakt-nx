import { OpenCommitment, Movement } from '../../models';

// action types
type InitDraftMovement = { type: 'InitDraftMovement', payload: OpenCommitment[] }
export type MovementActions = InitDraftMovement;

// reducer
interface DraftMovementType {
  movement: Movement;
  items: OpenCommitment[];
};

export interface MovementStateType {
  isModalOpen: boolean,
  draftMovement: DraftMovementType
};

export const movementInitialState: MovementStateType = {
  isModalOpen: false,
  draftMovement: {
    movement: undefined,
    items: undefined
  }
};

const initDraftMovement = (state: MovementStateType, items: OpenCommitment[]) => {
  const isModalOpen = !state.isModalOpen
  const draftMovement: DraftMovementType = {
    movement: {
      id: 'NEW UUID',
      bargeId: 'BARGE ID'
    },
    items
  };

  return {
    ...state,
    isModalOpen,
    draftMovement
  }
};

export const movementReducer = (state: MovementStateType, action: MovementActions): MovementStateType => {
  switch (action.type) {
    case 'InitDraftMovement':
        return initDraftMovement(state, action.payload);
    default:
      return state;
  }
};
