import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {getPizzas} from "./asyncActions.ts";
import { Pizza, PizzaSliceState, Status } from './types';

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING, // loading | success | error
};

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Pizza[]>) {
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
    },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;