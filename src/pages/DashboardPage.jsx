import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markCourseAsCompleted } from '../redux/slices/studentSlice';
import CourseCard from '../components/CourseCard';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.students.enrolledCourses);

  return (
    <div className="dashboard-page">
      <h1>My Courses</h1>
      <div className="enrolled-courses">
        {enrolledCourses.map((course) => (
          <div key={course.id}>
            <CourseCard course={course} />
            <button onClick={() => dispatch(markCourseAsCompleted(course.id))}>
              Mark as Completed
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
