import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice(
    {
        name: 'alert',
        initialState: { show: false },
        reducers: {
            show: (state, action) => {
                state.show = action.payload;
                
            },
            hide:(state,action) =>{
                state.show = action.payload;
            }
        }
    }
)

export default alertSlice.reducer
export const { show,hide } = alertSlice.actions