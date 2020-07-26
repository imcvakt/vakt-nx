import { Product } from './product';

export interface ContractDetails {
  customerTradeId: string;
  creator: string;
  product: Product;
  deliveryTerm: string;
}

export interface OpenCommitment {
  id: string;
  contractDetails: ContractDetails
}
