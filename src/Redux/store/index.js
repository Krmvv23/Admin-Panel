import { configureStore } from "@reduxjs/toolkit";
import foodsSlice from "../features/foodsSlice";
import alertSlice from "../features/alertSlice";
import orderSlice from "../features/orderSlice";

export const store  = configureStore(
    {
        reducer:{
            foods: foodsSlice,
            orders: orderSlice,
            showAlert: alertSlice
        }
    }
)

