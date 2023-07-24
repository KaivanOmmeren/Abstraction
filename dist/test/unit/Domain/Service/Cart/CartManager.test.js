"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../../../../../");
const CartRepositoryMock_1 = require("../../../../Util/Domain/Repository/Cart/CartRepositoryMock");
const CartNotFoundError_1 = require("../../../../../src/Domain/Service/Cart/Error/CartNotFoundError");
describe('CartManager', function () {
    const sut = new __1.CartManager(CartRepositoryMock_1.mockCartRepository);
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('get', function () {
        it('should retrieve a cart (happy)', function () {
            const result = sut.retrieveById(CartRepositoryMock_1.ID_CART_DEFAULT);
            expect(result).not.toBeNull();
            expect(result.Id).toBe(CartRepositoryMock_1.ID_CART_DEFAULT);
            expect(result.CustomerId).toBe(CartRepositoryMock_1.ID_CUSTOMER_DEFAULT);
            expect(result.CartItems.length).toBeGreaterThan(0);
        });
        it('should retrieve an empty cart (happy)', function () {
            const result = sut.retrieveById(CartRepositoryMock_1.ID_CART_WITHOUT_ITEMS);
            expect(result).not.toBeNull();
            expect(result.Id).toBe(CartRepositoryMock_1.ID_CART_WITHOUT_ITEMS);
            expect(result.CustomerId).toBe(CartRepositoryMock_1.ID_CUSTOMER_DEFAULT);
            expect(result.CartItems.length).toBe(0);
        });
        it('should throw an error for an invalid cart (unhappy)', function () {
            const act = () => sut.retrieveById(CartRepositoryMock_1.ID_CART_INVALID);
            expect(act).toThrow(CartNotFoundError_1.default);
        });
    });
});
