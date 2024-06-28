import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../redux/slices/courseSlice";
import CourseCard from "../components/CourseCard";

const CoursesPage = () => {
  const dispatch = useDispatch();
  const {
    list: courses,
    loading,
    error,
  } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-full w-full p-4 ">
      <h1 className="text-7xl font-bold text-center p-8">Courses</h1>
      <div className="container m-auto grid grid-cols-3 gap-8">
        {courses.length === 0 ? (
          <div>No courses available</div>
        ) : (
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
