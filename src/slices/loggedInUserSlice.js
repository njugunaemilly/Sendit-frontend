import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getLoggedInUser = createAsyncThunk("user/getLoggedInUser", async () => {
    return fetch("/logged-in")
    .then(res => res.json());
})

export const logoutUser = () => ({ type: "user/logout" })
const loggedInUser = createSlice({
    name: "loggedIn",
    initialState: {
        user: {},
        loading: false
    },
    extraReducers: {
        [getLoggedInUser.pending]: (state, action) => {
            state.loading = true;
        },
        [getLoggedInUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        [getLoggedInUser.rejected]: (state, action) => {
            state.loading = false;
        },
        'user/logout': (state, action) => {
            state.user = {};
        }
    }
})

export default loggedInUser.reducer