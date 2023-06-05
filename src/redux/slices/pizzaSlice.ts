import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCT_DATA } from "../../helpers/serverURL";
import axios from "axios";

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

const initialState = {
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

export const selectCart = (state) => state.cart;
export const selectTotalPrice = (state) => state.cart;


export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
