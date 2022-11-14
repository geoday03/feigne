import { Product } from "./product";

export interface UserState {
  cart: Product[];
  addresses: AddressList;
}

type AddressList = string[];
