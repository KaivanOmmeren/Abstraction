import { Cart } from "../../../../../";
import { CartItem } from "../../../../../src/Domain/Entity/Cart/CartItem";
import { CartRepositoryInterface } from "../../../../../src/Domain/Repository/Cart/CartRepositoryInterface";

export const ID_CART_DEFAULT = 'defaultId';
export const ID_CART_INVALID = 'invalidId';
export const ID_CART_WITHOUT_ITEMS = 'withoutId';
export const ID_CUSTOMER_DEFAULT = 1234;
export const ID_CUSTOMER_INVALID = -1;

export const mockCartRepositoryGet = jest.fn().mockImplementation((cartId: string) => {
    switch (cartId) {
        case ID_CART_DEFAULT:
            return {
                Id: cartId,
                CustomerId: ID_CUSTOMER_DEFAULT,
                CartItems: [{} as CartItem]
            } as Cart;
        case ID_CART_WITHOUT_ITEMS:
            return {
                Id: cartId,
                CustomerId: ID_CUSTOMER_DEFAULT,
                CartItems: [] as unknown as CartItem[]
            } as Cart;
        case ID_CART_INVALID:
        default:
            throw Error;
    }
});

export const mockCartRepository = {
    get: mockCartRepositoryGet
} as unknown as CartRepositoryInterface;
