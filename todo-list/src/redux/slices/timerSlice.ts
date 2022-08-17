import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimerSliceState {
    time: number;
    counting: boolean;
}

const initialState: TimerSliceState = {
    time: 0,
    counting: false,
};

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTime(state, action: PayloadAction<number>) {
            state.time = action.payload;
        },
        setCounting(state, action: PayloadAction<boolean>) {
            state.counting = action.payload;
        },
    },
});

export const { setTime, setCounting } = timerSlice.actions;

export default timerSlice.reducer;
