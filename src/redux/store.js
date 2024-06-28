import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './slices/courseSlice';
import studentReducer from './slices/studentSlice';
import courseIdReducer from './slices/courseIdSlice';

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    students: studentReducer,
    courseId: courseIdReducer,
  },
});
