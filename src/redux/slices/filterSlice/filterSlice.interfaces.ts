type sortPropertyTypes = "rating" | "title" | "price" | "-rating" | "-title" | "-price"

export type SortType = {
    name: string,
    sortProperty: sortPropertyTypes;
}

export interface  FilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: SortType;
}