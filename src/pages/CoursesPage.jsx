import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import { fetchCourses } from "../api/courseApi";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      console.log("calling this functions pls...")
      const coursesData = await fetchCourses();
      setCourses(Object.values(coursesData));
      console.log("Courses data:", coursesData);
      setLoading(false);
    };

    getCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="courses-page">
      <div>This is courses</div>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesPage;
