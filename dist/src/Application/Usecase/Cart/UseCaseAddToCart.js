"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseAddToCart = void 0;
const CartNotFoundError_1 = require("../../../Domain/Service/Cart/Error/CartNotFoundError");
class UseCaseAddToCart {
    Run(id, customerId, subsidiary, items) {
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
        }
        catch (error) {
            if (error instanceof CartNotFoundError_1.default) {
                cart = this.cartManager.createCart(customerId, subsidiary);
            }
            else {
                throw error;
            }
        }
        if (!this.validator.IsValidCustomerForCart(customerId, cart)) {
            throw new Error('Wrong cart');
        }
        return cart;
    }
}
exports.UseCaseAddToCart = UseCaseAddToCart;
