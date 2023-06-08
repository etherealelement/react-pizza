type sortPropertyTypes = "rating" | "title" | "price" | "-rating" | "-title" | "-price"

type SortType = {
    name: string,
    sortProperty: sortPropertyTypes;
}

export interface  FilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: SortType;
}