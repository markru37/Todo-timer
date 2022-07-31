import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    time: 0,
    counting: false,
};

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTime(state, action) {
            state.time = action.payload;
        },
        setCounting(state, action) {
            state.counting = action.payload;
        },
    },
});

export const { setTime, setCounting } = timerSlice.actions;

export default timerSlice.reducer;
