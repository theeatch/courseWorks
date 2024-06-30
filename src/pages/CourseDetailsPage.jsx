import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourseById } from "../redux/slices/courseIdSlice";
import { enrollCourse, LikeCourse } from "../redux/slices/authSlice";
const CourseDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courseId.currentCourse);
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.courseId.loading);

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(getCourseById(id - 1));
    }
  }, [id]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEnrollCourse = () => {
    if (user && course) {
      if (
        user.coursesReg &&
        user.coursesReg.some(
          (registeredCourse) => registeredCourse.id === course.id
        )
      ) {
        console.log(
          "Already enrolled in this course.",
          user.coursesReg,
          course.id
        );
        return;
      }
      dispatch(enrollCourse({ course: course, userId: user.uid }));
    }
  };
  const isUserEnrolled = user?.coursesReg?.some(
    (Regcourse) => Regcourse.id === course?.id
  );
  const handleLikes = async () =>{
    if(user && course){
      await dispatch(LikeCourse({id}));
      alert("course liked!")
    }

  }

  if (loading) {
    return (
      <div className="flex w-full h-screen items-center justify-center animate-pulse duration-500">
        <svg
          id="logo-86"
          width="52"
          height="52"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="ccustom"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z"
            fill="#007DFC"
          ></path>
          <path
            class="ccustom"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z"
            fill="#007DFC"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex items-center justify-center bg-slate-300 p-4 sm:p-12 overflow-hidden">
      {course ? (
        <div className="w-full h-full mt-20 lg:mt-28 flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 h-full flex flex-col mt-5 gap-4 text-lg sm:text-xl">
            <h1 className="text-4xl sm:text-7xl font-bold text-blue-500">
              {course.name}
            </h1>
            <p>
              <strong>Instructor:</strong> {course.instructor}
            </p>
            <p>
              <strong>Description:</strong> {course.description}
            </p>
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Schedule:</strong> {course.schedule}
            </p>
            <p>
              <strong>Location:</strong> {course.location}
            </p>
            <p className="flex gap-5 items-center">
              <strong>Enrollment Status:</strong>
              {course.enrollmentStatus === "Closed" ? (
                <span className="bg-red-500 text-white font-semibold text-lg sm:text-xl p-2 rounded-xl">
                  {course.enrollmentStatus}
                </span>
              ) : (
                <span className="bg-green-500 text-white font-semibold text-lg sm:text-xl p-2 rounded-xl">
                  {course.enrollmentStatus}
                </span>
              )}
              <p><strong className="text-blue-500">Likes!: </strong>{course.likes}</p>
            </p>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
              <p>
                <strong>Prerequisites:</strong>
                <ol className="flex flex-col">
                  {course.prerequisites.map((prerequisite, index) => (
                    <li key={index}>{prerequisite}</li>
                  ))}
                </ol>
              </p>
              <div className="flex flex-col gap-4">
                <h2
                  className="text-2xl sm:text-4xl font-bold cursor-pointer flex items-center gap-6"
                  onClick={toggleExpand}
                >
                  Course Content
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className={`w-4 duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M2 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0 0-288c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32l0 288-72 0c-9.6 0-18.2 5.7-22 14.5z" />
                  </svg>
                </h2>
                {isExpanded && (
                  <ul className="flex flex-col gap-4">
                    {course.syllabus.map((contentItem, index) => (
                      <li key={index}>
                        <strong>Week:</strong> {contentItem.week}
                        <br />
                        <strong>Topic:</strong> {contentItem.topic}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                onClick={handleLikes}
                className="bg-blue-500 p-2 h-1/2 rounded-xl hover:scale-105 duration-300 text-white font-semibold text-lg"
              >
                Like this Course!
              </button>
            </div>
            <button
              onClick={isUserEnrolled ? null : handleEnrollCourse}
              className={`rounded-xl overflow-hidden w-full p-2 font-semibold text-lg sm:text-xl duration-300 ${
                isUserEnrolled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-300 hover:bg-green-500 hover:scale-105"
              }`}
              disabled={isUserEnrolled}
            >
              {isUserEnrolled ? "Already Enrolled" : "Enroll Course"}
            </button>
          </div>
          <div className="w-full lg:w-[40%] h-1/2 mt-5 lg:mt-0">
            <img
              src={course.thumbnail}
              alt="course-thumbnail"
              className="h-[80%] w-full"
            />
          </div>
        </div>
      ) : (
        <p>No course found.</p>
      )}
    </div>
  );
};

export default CourseDetailsPage;
