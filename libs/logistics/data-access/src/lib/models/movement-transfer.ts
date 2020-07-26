export enum MovementTransferType {
  LOAD, DISCHARGE
}

export interface MovementTransfer {
  id: string;
  data: string;
  type: MovementTransferType
}
