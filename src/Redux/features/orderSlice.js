import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchOrder = createAsyncThunk('fetchorder', async () => {
    const { data } = await axios.get('http://localhost:8000/orders')
    return data
})

const initialState = {
    data: [],
    error: '',
    loading: false
}

const orderSlice = createSlice(
    {
        name: 'order',
        initialState,
        extraReducers: builder => {
            builder.addCase(fetchOrder.pending, (state, action) => {
                state.loading = true
                state.data = null
            })
            builder.addCase(fetchOrder.fulfilled, (state, action) => {
                state.loading = false
                state.data = action
            })
            builder.addCase(fetchOrder.rejected, (state, action) => {
                state.loading = false
                state.error = 'Error Fetching Order'
            })
        }
    }
)

export default orderSlice.reducer
export const { add } = orderSlice.actions