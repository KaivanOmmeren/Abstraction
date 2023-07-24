import { Cart, Subsidiary } from "../../../../";
import { CartRepositoryInterface } from "../../Repository/Cart/CartRepositoryInterface";
export declare class CartManager {
    private readonly repository;
    constructor(repository: CartRepositoryInterface);
    retrieveById(cartId: string): Cart;
    createCart(customerId: number, subsidiary: Subsidiary): Cart;
}
