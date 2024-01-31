import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { productReducer } from "./productSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

