// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  auth,
  firedb,
  doc,
  setDoc,
  getDoc,
  ref,
  get,
  update,
  db,
} from "../../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const serializeUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    coursesReg: user.coursesReg || [],
  };
};

export const signUp = createAsyncThunk(
  "auth/signUpWithEmailAndPassword",
  async ({ email, password, userName }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = serializeUser(userCredential.user);

      await setDoc(doc(firedb, "users", user.uid), {
        email: user.email,
        displayName: userName,
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
      const userRef = doc(firedb, "users", userId);
      const userDoc = await getDoc(userRef);
      const userData = userDoc.data();

      const updateStudents = [...course.students, {
        id: userId,
        name: userData.displayName,
        email: userData.email,
      }]

      const updatedCoursesReg = [...userData.coursesReg, course];

      await setDoc(userRef, { coursesReg: updatedCoursesReg }, { merge: true });

      return { userId, coursesReg: updatedCoursesReg, students: updateStudents};
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const LikeCourse = createAsyncThunk("auth/LikeCourse",
  async ({ id }) => {
    try {
      id = id-1
      const dbRef = ref(db, `courses/${id}`);
      const courseSnapshot = await get(dbRef);
      console.log(courseSnapshot.val());
      if (!courseSnapshot.exists()) {
        throw new Error("Course not found");
      }
      const courseData = courseSnapshot.val();
      console.log(courseData)
      const updateLikes = courseData.likes + 1;

      await update(dbRef, { likes: updateLikes });

      return { courseId: id, likes: updateLikes };
    } catch (error) {
      return error.message;
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
        if (state.user) {
          state.user.coursesReg = action.payload.coursesReg;
        }
        if(state.course){
          state.course.students = action.payload.students;
        }
      })
      .addCase(enrollCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(LikeCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LikeCourse.fulfilled, (state, action) => {
        state.loading = false;
        if(state.course){
          state.course.likes = action.payload.likes;
        }
      })
      .addCase(LikeCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;