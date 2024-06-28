import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCourses } from '../../api/courseApi';

export const getCourses = createAsyncThunk('courses/getCourses', async (_, { rejectWithValue }) => {
    try {
        const courses = await fetchCourses();
        return courses;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const courseSlice = createSlice({
    name: 'courses',
    initialState: {
        list: [],
        currentCourse: null,
        loading: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCourses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCourses.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getCourses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch courses';
            });
    },
});

export default courseSlice.reducer;
