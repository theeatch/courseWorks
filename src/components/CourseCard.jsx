import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div
      className="
        p-4 rounded-xl bg-black/10 border-2 border-gray-800 shadow-2xl shadow-black/70 text-black flex flex-col gap-2 hover:scale-105 duration-300 hover:cursor-pointer"
      onClick={handleCourseClick}
    >
      <img src={course.thumbnail} alt={course.name} className="w-1/2  h-32" />
      <h2 className="text-3xl font-bold text-blue-600">{course.name}</h2>
      <p>
        <strong className="text-black/70">Instructor:</strong>{" "}
        {course.instructor}
      </p>
      <p>
        <strong className="text-black/70">Description:</strong>{" "}
        {course.description}
      </p>
      <p>
        <strong className="text-black/70">Enrollment Status:</strong>
        <span className="bg-slate-300 p-2 rounded-xl">{course.enrollmentStatus}</span>{" "}
      </p>
      <p>
        <strong className="text-black/70">Duration:</strong> {course.duration}
      </p>
      <p>
        <strong className="text-black/70">Schedule:</strong> {course.schedule}
      </p>
      <p>
        <strong className="text-black/70">Location:</strong> {course.location}
      </p>
      <p>
        <strong className="text-black/70 text-blue-500">Likes:</strong>{" "}
        {course.likes}
      </p>
    </div>
  );
};

export default CourseCard;
