
type StatusType = "loading" | "success" | "error"
export interface PizzaSliceInterface {
    items: PizzaItem[];
    status:  StatusType;
}

export type FetchPizzasTypes = Record<string, string>;

type PizzaItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
}