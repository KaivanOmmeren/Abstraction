"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartManager = void 0;
const CartNotFoundError_1 = require("./Error/CartNotFoundError");
class CartManager {
    constructor(repository) {
        this.repository = repository;
    }
    retrieveById(cartId) {
        try {
            return this.repository.get(cartId);
        }
        catch (error) {
            throw new CartNotFoundError_1.default(cartId);
        }
    }
    createCart(customerId, subsidiary) {
        return {};
    }
}
exports.CartManager = CartManager;
