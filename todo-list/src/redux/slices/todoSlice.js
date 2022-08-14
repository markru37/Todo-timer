import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodo = createAsyncThunk('todo/fetchTodos', async (params = '', thunkAPI) => {
    const { data } = await axios.get(`https://62d7c31e49c87ff2af3c39ba.mockapi.io/todo`);
    if (data.length === 0) {
        return thunkAPI.rejectWithValue('Todos is empty');
    }
    return thunkAPI.fulfillWithValue(data);
});

const initialState = {
    todo: [],
    addValue: '',
    flag: true,
    status: 'loading',
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setItems(state, action) {
            state.todo = action.payload;
        },
        setAddValue(state, action) {
            state.addValue = action.payload;
        },
        changeFlag(state, action) {
            state.flag = action.payload;
        },
    },
    extraReducers: {
        [fetchTodo.pending]: (state) => {
            state.status = 'loading';
            state.todo = [];
        },
        [fetchTodo.fulfilled]: (state, action) => {
            state.todo = action.payload;
            state.status = 'success';
        },
        [fetchTodo.rejected]: (state) => {
            state.status = 'error';
            state.todo = [];
        },
    },
});

export const { setItems, setAddValue, changeFlag } = todoSlice.actions;
export const todoSelector = (state) => state.todoSlice;

export default todoSlice.reducer;
