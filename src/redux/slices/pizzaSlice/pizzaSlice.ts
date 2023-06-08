import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PRODUCT_DATA} from "../../../helpers/serverURL.ts";
import axios from "axios";
import {RootState} from "../../store.ts";
import {FetchPizzasTypes, PizzaItem, PizzaSliceInterface, Status} from "./pizzaSlice.interfaces.ts";


export const getPizzas = createAsyncThunk<PizzaItem[], FetchPizzasTypes>(
    "pizza/fetchPizzasStatus",
    async (params) => {
        const {order, sortBy, category, search, currentPage} = params;

        const {data} = await axios.get<PizzaItem[]>(
            `${PRODUCT_DATA}page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`
        );

        console.log(data)

        return data;
    }
);

const initialState: PizzaSliceInterface = {
    items: [],
    status: Status.LOADING,
};

const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setItems(state, action:PayloadAction<PizzaItem[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPizzas.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        });

        builder.addCase(getPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });

        builder.addCase(getPizzas.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    }

    // extraReducers: {
    //   [getPizzas.pending]: (state) => {
    //     state.status = "loading";
    //     state.items = [];
    //   },
    //   [getPizzas.fulfilled]: (state, action) => {
    //     state.items = action.payload;
    //     state.status = "success";
    //   },
    //   [getPizzas.fulfilled]: (state, action) => {
    //     state.status = "error";
    //     state.items = [];
    //   }
    // }
});

export const selectPizza = (state: RootState) => state.pizza;
export const selectCart = (state: RootState) => state.cart;
export const selectTotalPrice = (state: RootState) => state.cart;


export const {setItems} = pizzaSlice.actions;
export default pizzaSlice.reducer;
