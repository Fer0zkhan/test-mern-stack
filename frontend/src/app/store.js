import { configureStore } from '@reduxjs/toolkit';
import authReduser from '../features/auth/authSlice';
import goalReduser from '../features/goals/goalSlice';

export const store = configureStore({
  reducer: {
    auth: authReduser,
    goals: goalReduser
  },
});
