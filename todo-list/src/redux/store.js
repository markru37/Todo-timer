import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';
import timerSlice from './slices/timerSlice';

export const store = configureStore({
    reducer: {
        todoSlice,
        timerSlice,
    },
});
