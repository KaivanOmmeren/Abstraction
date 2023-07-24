import { Cart, CartItem, Subsidiary } from "../../../../index";
export declare class UseCaseAddToCart {
    private readonly cartManager;
    private readonly validator;
    Run(id: string, customerId: number, subsidiary: Subsidiary, items: CartItem[]): Cart;
}
