import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCourseById } from '../../api/courseApi';

export const getCourseById = createAsyncThunk(
  'courseId/getCourseById',
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await fetchCourseById(courseId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const courseIdSlice = createSlice({
  name: 'courseId',
  initialState: {
    currentCourse: null,
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourseById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getCourseById.fulfilled, (state, action) => {
        state.currentCourse = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(getCourseById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch course';
      });
  },
});

export default courseIdSlice.reducer;
