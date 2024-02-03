import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

export const getProfile = createAsyncThunk(
    "completeProfileSlice/getProfile",
    async (data) => {
        try {
            // function here

        } catch (error) {
            console.error(error);
        }
    });

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log('called')
            state.todos = action.payload.data
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state, action) => {
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                // state.userProfile = action.payload;
            })
            .addCase(getProfile.rejected, (state, action) => {
            })
    }
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer