import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCourses } from '../../api/courseApi';

export const getCourses = createAsyncThunk('courses/getCourses', fetchCourses);

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    list: [],
    currentCourse: null,
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getCourses.rejected, (state) => {
        state.status = 'failed';
      })
  },
});

export default courseSlice.reducer;
