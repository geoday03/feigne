import { CartItemConfig } from "./cart-item-config";

interface CartState {
  items: CartItemConfig[];
  total: number;
}

export default CartState;
