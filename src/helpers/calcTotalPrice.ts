import {CartItem} from "../redux/cart/types.ts";

export const calcTotalPrice = (items: CartItem[]) => {
    return  items.reduce((acc, item) => {
        return item.price * item.count + acc;
    },0)
}