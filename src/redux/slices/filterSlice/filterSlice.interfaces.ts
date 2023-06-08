export enum SortPropertyEnum {
    RATING_DESC = "rating",
    TITLE_DESC = "title",
    PRICE_DESC = "price",
    RATING_ASC = "-rating",
    TITLE_ASC = "-title",
    PRICE_ASC = "-price",
}

export type sortPropertyTypes = SortPropertyEnum;

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