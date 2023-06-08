type CartItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: number;
    type: number;
    size: number;
    count: number;
}


export interface CartSliceInterfaces {
    totalPrice: number;
    items: CartItem[];
}