import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../redux/slices/courseSlice';
import CourseDetails from '../components/CourseDetails';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courses.currentCourse);

  useEffect(() => {
    dispatch(getCourseById(id));
  }, [dispatch, id]);

  return (
    <div className="course-details-page">
      {course ? <CourseDetails course={course} /> : <p>Loading...</p>}
    </div>
  );
};

export default CourseDetailsPage;
