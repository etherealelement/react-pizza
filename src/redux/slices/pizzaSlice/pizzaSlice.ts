import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCT_DATA } from "../../../helpers/serverURL.ts";
import axios from "axios";
import {RootState} from "../../store.ts";
import {PizzaSliceInterface} from "./pizzaSlice.interfaces.ts";


export const getPizzas = createAsyncThunk(
	"pizza/fetchPizzasStatus",
	async (params, thunkApi) => {
		const { order, sortBy, category, search, currentPage } = params;

		const { data } = await axios.get(
			`${PRODUCT_DATA}page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    
      console.log(data)

		return data;
	}
);

const initialState:PizzaSliceInterface = {
  items: [],
  status: "loading",
};

const pizzaSlice = createSlice({
	name: "pizza",
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
  },
  extraReducers: {
    [getPizzas.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [getPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [getPizzas.fulfilled]: (state, action) => {
      state.status = "error";
      state.items = [];
    }
  }
});

export const selectPizza = (state: RootState) => state.pizza;
export const selectCart = (state: RootState) => state.cart;
export const selectTotalPrice = (state: RootState) => state.cart;


export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
