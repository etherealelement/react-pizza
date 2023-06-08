
type StatusType = "loading" | "success" | "error"
export interface PizzaSliceInterface {
    items: PizzaItem[];
    status:  StatusType;
}

type PizzaItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
}