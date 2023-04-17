import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getParcels = createAsyncThunk("parcels/getParcels", async () => {
    return fetch("/parcels")
    .then(res => res.json());
})
const loggedInUser = createSlice({
    name: "parcels",
    initialState: {
        parcels: [],
        loading: false
    },
    extraReducers: {
        [getParcels.pending]: (state, action) => {
            state.loading = true;
        },
        [getParcels.fulfilled]: (state, action) => {
            state.loading = false;
            state.parcels = action.payload;
        },
        [getParcels.rejected]: (state, action) => {
            state.loading = false;
        }
    }
})

export default loggedInUser.reducer