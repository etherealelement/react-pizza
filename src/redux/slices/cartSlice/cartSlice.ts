import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store.ts";
import {CartSliceInterfaces} from "./cartSlice.interfaces.ts";
import {getCartFromLS} from "../../../helpers/getCartFromLS.ts";
import {calcTotalPrice} from "../../../helpers/calcTotalPrice.ts";


const {items, totalPrice} = getCartFromLS();

const initialState:CartSliceInterfaces = {
  totalPrice,
  items
};

const cartSlice = createSlice({ 
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id)

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        });
      }

    state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  }
})
// Selectors

export const selectCartItemById = (id: string) =>  (state: RootState) => state.cart.items.find(obj => obj.id === id)


export const { addItem, removeItem, minusItem,clearItems } = cartSlice.actions;
export default cartSlice.reducer;