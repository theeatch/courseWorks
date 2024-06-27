// src/components/CourseCard.js
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
        Something should show up here
        
      <img src={course.thumbnail} alt={`${course.name} thumbnail`} />
      <h2>{course.name}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
    </div>
  );
};

export default CourseCard;
