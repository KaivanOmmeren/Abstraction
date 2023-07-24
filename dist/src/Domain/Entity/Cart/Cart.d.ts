import { CartItem, Subsidiary } from '../../../../';
export type Cart = {
    Id: string;
    CustomerId: number;
    SubsidiaryId: Subsidiary;
    CartItems: CartItem[];
};
