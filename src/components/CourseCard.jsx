import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const navigate = useNavigate();

    const handleCourseClick = () => {
        navigate(`/course/${course.id}`);
    };

    return (
        <div className="
        p-4 rounded-xl bg-slate-400/20 border-2 border-gray-800 shadow-xl shadow-slate-400 text-black flex flex-col gap-2 hover:scale-105 duration-300 hover:cursor-pointer" onClick={handleCourseClick}>
            <img src={course.thumbnail} alt={`${course.name} thumbnail`} />
            <h2 className='text-3xl font-bold text-blue-600'>{course.name}</h2>
            <p><strong className='text-black/70'>Instructor:</strong> {course.instructor}</p>
            <p><strong className='text-black/70'>Description:</strong> {course.description}</p>
            <p><strong className='text-black/70'>Enrollment Status:</strong> {course.enrollmentStatus}</p>
            <p><strong className='text-black/70'>Duration:</strong> {course.duration}</p>
            <p><strong className='text-black/70'>Schedule:</strong> {course.schedule}</p>
            <p><strong className='text-black/70'>Location:</strong> {course.location}</p>
        </div>
    );
};

export default CourseCard;
