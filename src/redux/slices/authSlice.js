// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, firedb, doc, setDoc, getDoc, updateDoc } from "../../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const serializeUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    coursesReg: user.coursesReg || [],
  };
};

export const signUp = createAsyncThunk(
  "auth/signUpWithEmailAndPassword",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = serializeUser(userCredential.user);

      await setDoc(doc(firedb, "users", user.uid), {
        email: user.email,
        displayName: user.displayName,
        coursesReg: user.coursesReg || [], // Ensure coursesReg is initialized as an empty array if undefined
      });

      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signInWithEmailAndPassword",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return serializeUser(userCredential.user);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk(
  "auth/signOut",
  async (_, { rejectWithValue }) => {
    try {
      await auth.signOut();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const enrollCourse = createAsyncThunk(
  "auth/enrollCourse",
  async ({ course, userId }, { rejectWithValue }) => {
    try {
      const userDocRef = doc(firedb, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        throw new Error("User not found");
      }

      const userData = userDoc.data();
      const updatedCourses = [...(userData.coursesReg || []), course];

      await updateDoc(userDocRef, { coursesReg: updatedCourses });

      return { userId, coursesReg: updatedCourses };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signOut.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(enrollCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(enrollCourse.fulfilled, (state, action) => {
        state.loading = false;
        if (state.user && state.user.uid === action.payload.userId) {
          state.user.coursesReg = action.payload.coursesReg;
        }
      })
      .addCase(enrollCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
