import { OpenCommitment } from '../../models';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  ToggleSelection = "TOGGLE_SELECTION",
}

interface OpenCommitmentPayload {
  [Types.ToggleSelection]: OpenCommitment;
};

export type OpenCommitmentActions = ActionMap<OpenCommitmentPayload>[keyof ActionMap<
  OpenCommitmentPayload
>];

export const openCommitmentReducer = (
  state: OpenCommitment[],
  action: OpenCommitmentActions
) => {
  let found = false;
  switch (action.type) {
    case Types.ToggleSelection:
      found = !!state.find(openCommitment => action.payload.id === openCommitment.id)
      if(found) {
        return state.filter(openCommitment => action.payload.id !== openCommitment.id)
      }
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};
