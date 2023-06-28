import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getMessages = createAsyncThunk("messages/getMessages", async () => {
    return fetch("api/messages")
    .then(res => res.json());
})
const messagesSend = createSlice({
    name: "messages",
    initialState: {
        messages: [],
        loading: false
    },
    extraReducers: {
        [getMessages.pending]: (state, action) => {
            state.loading = true;
        },
        [getMessages.fulfilled]: (state, action) => {
            state.loading = false;
            state.messages = action.payload;
        },
        [getMessages.rejected]: (state, action) => {
            state.loading = false;
        }
    }
})

export default messagesSend.reducer