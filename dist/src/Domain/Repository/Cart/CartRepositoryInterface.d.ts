import { Cart } from "../../Entity/Cart/Cart";
import { CartItem } from "../../Entity/Cart/CartItem";
export interface CartRepositoryInterface {
    get(id: string): Cart;
    post(items: CartItem[]): Cart;
}
