export enum MovementTransferType {
  LOAD, DISCHARGE
}

export interface MovementTransfer {
  id: string;
  movementId: string;
  data: string;
  type: MovementTransferType
}
