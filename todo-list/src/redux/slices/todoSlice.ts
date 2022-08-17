import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export const fetchTodo = createAsyncThunk<Todo[]>('todo/fetchTodos', async () => {
    const { data } = await axios.get<Todo[]>(`https://62d7c31e49c87ff2af3c39ba.mockapi.io/todo`);
    return data;
});

type Todo = {
    id: string;
    title: string;
    complete: string;
}

interface TodoSliceState {
    todo: Todo[];
    addValue: string;
    flag: boolean;
    status: 'loading' | 'success' | 'error';
}

const initialState: TodoSliceState = {
    todo: [],
    addValue: '',
    flag: true,
    status: 'loading',
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Todo[]>) {
            state.todo = action.payload;
        },
        setAddValue(state, action: PayloadAction<string>) {
            state.addValue = action.payload;
        },
        changeFlag(state, action: PayloadAction<boolean>) {
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


export const todoSelector = (state: RootState) => state.todoSlice;

export const { setItems, setAddValue, changeFlag } = todoSlice.actions;

export default todoSlice.reducer;
