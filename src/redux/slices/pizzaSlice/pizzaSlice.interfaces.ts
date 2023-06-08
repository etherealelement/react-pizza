
type StatusType = Status;
export interface PizzaSliceInterface {
    items: PizzaItem[];
    status:  StatusType;
}

export type FetchPizzasTypes = Record<string, string>;

export type PizzaItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
}

export  enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
}