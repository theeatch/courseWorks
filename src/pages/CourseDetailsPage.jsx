import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../redux/slices/courseIdSlice';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courseId.currentCourse);
  const status = useSelector((state) => state.courseId.status);

  useEffect(() => {
    if (id) {
      dispatch(getCourseById(id -1));
    }
  }, [dispatch, id]);
  console.log(course)

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error loading course details.</p>;
  }

  return (
    <div className="h-full w-full flex justify-center">
      {course ? (
        <div className='h-full flex flex-col mt-5'>
          <h1 className='text-7xl font-bold text-blue-500'>{course.name}</h1>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Description:</strong> {course.description}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>EnrollmentStatus:</strong> {course.enrollmentStatus}</p>
          <p><strong>Prerequisites:</strong>
          <ul>
            {course.prerequisites.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
            </ul>
          </p>
          <h2>Course Content</h2>
          
          
          <ul>
            {course.syllabus.map((contentItem, index) => (
              <li key={index}>
                <strong>Topic:</strong> {contentItem.topic}<br />
                <strong>Week:</strong> {contentItem.week}
              </li>
            ))}
          </ul>
          
        </div>
      ) : (
        <p>No course found.</p>
      )}
    </div>
  );
};

export default CourseDetailsPage;
