import React from 'react';

const CourseDetails = ({ course }) => (
  <div className="course-details">
    <h1>{course.name}</h1>
    <p>Instructor: {course.instructor}</p>
    <p>{course.description}</p>
    <p>Status: {course.enrollmentStatus}</p>
    <p>Duration: {course.duration}</p>
    <p>Schedule: {course.schedule}</p>
    <p>Location: {course.location}</p>
    <p>Pre-requisites: {course.preRequisites}</p>
    <div className="syllabus">
      <h2>Syllabus</h2>
      {course.syllabus.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  </div>
);

export default CourseDetails;
