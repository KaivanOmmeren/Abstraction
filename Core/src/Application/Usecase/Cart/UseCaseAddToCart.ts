import { Cart, CartItem, CartManager, CartValidator, Subsidiary } from "../../../../index";
import CartNotFoundError from "../../../Domain/Service/Cart/Error/CartNotFoundError";

export class UseCaseAddToCart {
    private readonly cartManager: CartManager;
    private readonly validator: CartValidator;

    public Run(id: string, customerId: number, subsidiary: Subsidiary, items: CartItem[]): Cart {
        /*
        [*]Retrieve cart
        [*]If there is no cart: Create cart
        [*]make sure customer requesting is the same as the cart
        [ ]Add requested products to the cart object
        [ ]Store new Cart
        [ ]Return updated/new cart
         */
        let cart;
        try {
            cart = this.cartManager.retrieveById(id);
        } catch (error) {
            if (error instanceof CartNotFoundError) {
                cart = this.cartManager.createCart(customerId,subsidiary);
            } else {
                throw error;
            }
        }
        if (!this.validator.IsValidCustomerForCart(customerId, cart as Cart)) {
            throw new Error('Wrong cart');
        }
        return cart as Cart;
    }
}
