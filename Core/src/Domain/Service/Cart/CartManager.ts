import { Cart, Subsidiary } from "../../../../";
import { CartRepositoryInterface } from "../../Repository/Cart/CartRepositoryInterface";
import CartNotFoundError from "./Error/CartNotFoundError";

export class CartManager {
    private readonly repository: CartRepositoryInterface;

    constructor(repository: CartRepositoryInterface) {
        this.repository = repository;
    }

    public retrieveById(cartId: string): Cart {
        try {
            return this.repository.get(cartId);
        } catch (error) {
            throw new CartNotFoundError(cartId);
        }
    }

    public createCart(customerId: number, subsidiary: Subsidiary): Cart {
        return {} as Cart
    }
}
