"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartValidator = void 0;
class CartValidator {
    IsValidCustomerForCart(customerId, cart) {
        return customerId === cart.CustomerId;
    }
}
exports.CartValidator = CartValidator;
