import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { TypeTodo, TodoSliceState, Status } from './types';

export const fetchTodo = createAsyncThunk<TypeTodo[]>('todo/fetchTodos', async () => {
    const { data } = await axios.get<TypeTodo[]>(`https://62d7c31e49c87ff2af3c39ba.mockapi.io/todo`);
    return data;
});

const initialState: TodoSliceState = {
    todo: [],
    addValue: '',
    flag: true,
    status: Status.LOADING,
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<TypeTodo[]>) {
            state.todo = action.payload;
        },
        setAddValue(state, action: PayloadAction<string>) {
            state.addValue = action.payload;
        },
        changeFlag(state, action: PayloadAction<boolean>) {
            state.flag = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state)=>{
            state.status = Status.LOADING;
            state.todo = [];
        });
        builder.addCase(fetchTodo.fulfilled, (state, action)=>{
            state.todo = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchTodo.rejected, (state)=>{
            state.status = Status.ERROR;
            state.todo = [];
        })
    }
});


export const { setItems, setAddValue, changeFlag } = todoSlice.actions;

export default todoSlice.reducer;
