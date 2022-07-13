import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    error: '',
    loading: false
}

export const fetchFood = createAsyncThunk('fetchfood', async ()=>{
    const {data} = await axios.get('http://localhost:8000/foods')
    return data
})
const foodSlice = createSlice(
    {
        name: 'food',
        initialState,
        extraReducers: builder =>{
            builder.addCase(fetchFood.pending, (state, action)=>{
                state.loading = true
            })
            builder.addCase(fetchFood.fulfilled, (state, action)=>{
                state.loading = false
                state.data = action
            })
            builder.addCase(fetchFood.rejected, (state, action)=>{
                state.error = 'Error Fetching Food'
                state.loading = false
            })
        }
    }
)

export default foodSlice.reducer