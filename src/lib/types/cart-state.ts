import { CartItem } from "./cart-item";

interface CartState {
  items: CartItem[];
  total: number;
}

export default CartState;
