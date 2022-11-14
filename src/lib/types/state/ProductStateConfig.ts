import { Product } from "../product";

export interface ProductStateConfig {
  products: Product[][];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
