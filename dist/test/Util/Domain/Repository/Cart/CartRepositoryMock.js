"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockCartRepository = exports.mockCartRepositoryGet = exports.ID_CUSTOMER_INVALID = exports.ID_CUSTOMER_DEFAULT = exports.ID_CART_WITHOUT_ITEMS = exports.ID_CART_INVALID = exports.ID_CART_DEFAULT = void 0;
exports.ID_CART_DEFAULT = 'defaultId';
exports.ID_CART_INVALID = 'invalidId';
exports.ID_CART_WITHOUT_ITEMS = 'withoutId';
exports.ID_CUSTOMER_DEFAULT = 1234;
exports.ID_CUSTOMER_INVALID = -1;
exports.mockCartRepositoryGet = jest.fn().mockImplementation((cartId) => {
    switch (cartId) {
        case exports.ID_CART_DEFAULT:
            return {
                Id: cartId,
                CustomerId: exports.ID_CUSTOMER_DEFAULT,
                CartItems: [{}]
            };
        case exports.ID_CART_WITHOUT_ITEMS:
            return {
                Id: cartId,
                CustomerId: exports.ID_CUSTOMER_DEFAULT,
                CartItems: []
            };
        case exports.ID_CART_INVALID:
        default:
            throw Error;
    }
});
exports.mockCartRepository = {
    get: exports.mockCartRepositoryGet
};
