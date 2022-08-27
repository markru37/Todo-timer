import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/TodoSlice/slice';
import timerSlice from './slices/TimerSlice/slice';
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