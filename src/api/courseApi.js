import { db, ref, get, child } from '../firebase/firebase';

export const fetchCourses = async () => {
  const dbRef = await ref(db);
  console.log("Fetching courses...", dbRef)
  try {
    const snapshot = await get(child(dbRef, 'courses'));
    console.log("Snapshot:", snapshot);
    if (snapshot.exists()) {
      console.log("Fetched courses:", snapshot.val());
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
