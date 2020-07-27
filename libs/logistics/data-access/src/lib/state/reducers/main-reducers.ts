import {
  openCommitmentReducer,
  OpenCommitmentActions
} from "./open-commitment";
import { OpenCommitment } from '../../models';

export interface InitialStateType {
  openCommitments: OpenCommitment[];
};

export const initialState: InitialStateType = {
  openCommitments: [],
};

export const mainReducer = (
  { openCommitments }: InitialStateType,
  action: OpenCommitmentActions
) => ({
  openCommitments: openCommitmentReducer(openCommitments, action)
});
