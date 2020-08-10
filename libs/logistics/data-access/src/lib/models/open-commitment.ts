import { Product } from './product';

export interface ContractDetails {
  customerTradeId: string;
  creator: string;
  product: Product;
  deliveryTerm: string;
  quantity: number;
  uom: string;
}

export interface OpenCommitment {
  id: string;
  movementTransferId?: string;
  nominationId?: string;
  contractDetails: ContractDetails
}
