import {
    ID_CART_DEFAULT, ID_CART_INVALID, ID_CART_WITHOUT_ITEMS,
    ID_CUSTOMER_DEFAULT,
    mockCartRepository
} from "../../../../Util/Domain/Repository/Cart/CartRepositoryMock";
import CartNotFoundError from "../../../../../src/Domain/Service/Cart/Error/CartNotFoundError";
import {CartManager} from "../../../../../src/Domain/Service/Cart/CartManager";

describe('CartManager', function () {
    const sut = new CartManager(mockCartRepository);

    afterEach(()=> {
        jest.clearAllMocks();
    });

    describe('get', function () {
        it('should retrieve a cart (happy)', function () {
            const result = sut.retrieveById(ID_CART_DEFAULT);
            expect(result).not.toBeNull();
            expect(result.Id).toBe(ID_CART_DEFAULT);
            expect(result.CustomerId).toBe(ID_CUSTOMER_DEFAULT);
            expect(result.CartItems.length).toBeGreaterThan(0);
        });

        it('should retrieve an empty cart (happy)', function () {
            const result = sut.retrieveById(ID_CART_WITHOUT_ITEMS);
            expect(result).not.toBeNull();
            expect(result.Id).toBe(ID_CART_WITHOUT_ITEMS);
            expect(result.CustomerId).toBe(ID_CUSTOMER_DEFAULT);
            expect(result.CartItems.length).toBe(0);
        });

        it('should throw an error for an invalid cart (unhappy)', function () {
            const act = () => sut.retrieveById(ID_CART_INVALID);

            expect(act).toThrow(CartNotFoundError);

        });
    });
});
