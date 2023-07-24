/// <reference types="jest" />
import { CartRepositoryInterface } from "../../../../../src/Domain/Repository/Cart/CartRepositoryInterface";
export declare const ID_CART_DEFAULT = "defaultId";
export declare const ID_CART_INVALID = "invalidId";
export declare const ID_CART_WITHOUT_ITEMS = "withoutId";
export declare const ID_CUSTOMER_DEFAULT = 1234;
export declare const ID_CUSTOMER_INVALID = -1;
export declare const mockCartRepositoryGet: jest.Mock<any, any, any>;
export declare const mockCartRepository: CartRepositoryInterface;
