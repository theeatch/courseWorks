import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './slices/courseSlice';
import courseIdReducer from './slices/courseIdSlice';
import authReducer from "./slices/authSlice"

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    courseId: courseIdReducer,
    auth: authReducer,
  },
});
