import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice/filterSlice.ts'
import cart from "./slices/cartSlice/cartSlice.ts";
import pizza from './slices/pizzaSlice/pizzaSlice.ts';
import {useDispatch} from "react-redux";

export const store = configureStore({
  reducer: {
    filter, 
    cart,
    pizza
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();