import { Cart } from "../../Entity/Cart/Cart";

export class CartValidator {
    public IsValidCustomerForCart(customerId: number, cart: Cart): boolean {
        return customerId === cart.CustomerId;
    }
}
