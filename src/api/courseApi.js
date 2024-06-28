import { db, ref, get, child } from '../firebase/firebase';

export const fetchCourses = async () => {
  const dbRef = await ref(db);
  try {
    const snapshot = await get(child(dbRef, 'courses'));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

export const fetchCourseById = async (courseId) => {
  const dbRef = await ref(db);
  try {
    const snapshot = await get(child(dbRef, `courses/${courseId}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}
