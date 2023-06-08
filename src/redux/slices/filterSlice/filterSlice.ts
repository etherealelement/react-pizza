import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store.ts";
import {FilterSliceState, SortPropertyEnum, SortType} from "./filterSlice.interfaces.ts";


const initialState:FilterSliceState = {
  searchValue: "",
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "популярности",
    sortProperty: SortPropertyEnum.RATING_DESC
  }
};

const filterSlice = createSlice({ 
  name: "filters",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },


    setCategoryId(state, action:PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action:PayloadAction<SortType>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action:PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action:PayloadAction<FilterSliceState>) {
      if (Object.keys(action.payload). length) {
        state.currentPage = Number(action.payload.currentPage);
        state.sort = action.payload.sort;
        state.categoryId = Number(action.payload.sort);
      } else {
        state.currentPage = 1;
        state.categoryId = 0;
        state.sort = {
          name: "популярности",
          sortProperty: SortPropertyEnum.RATING_DESC,
        }
      }
    }
  }
})


export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState ) => state.filter.sort;

export const { setCategoryId, setSort, setCurrentPage, setSearchValue, setFilters } = filterSlice.actions;
export default filterSlice.reducer;