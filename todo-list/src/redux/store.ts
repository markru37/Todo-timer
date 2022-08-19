import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';
import timerSlice from './slices/timerSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        todoSlice,
        timerSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()