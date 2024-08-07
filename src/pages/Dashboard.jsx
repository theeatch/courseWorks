import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../redux/slices/authSlice";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const [completeStates, setCompleteStates] = useState([]);

  const handleSignOut = async () => {
    const resultAction = await dispatch(signOut());
    if (signOut.fulfilled.match(resultAction)) {
      window.location.href = "/login";
    } else {
      console.error("Sign out failed:", resultAction.payload);
    }
  };

  useEffect(()=>{
    if(user){
      setCompleteStates(user?.coursesReg?.map(() => false) )
    }
  },[user])
  

  const extractNumber = () => {
    return Math.floor(Math.random() * (80 - 10 + 1)) + 10;
  };

  const handleComplete = (index) => {
    setCompleteStates((prevStates) => {
      const newState = prevStates.map((state, i) =>
        i === index ? true : state
      );
      console.log("New State:", newState);
      return newState;
    });
  };

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
    <div className="h-full w-full flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-20">
      <div className="w-full max-w-screen-lg bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 sm:p-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-2">
            Welcome back, {user?.displayName}!
          </h2>
          <div className="border-t border-gray-200 mt-4 p-4 space-y-6 h-full">
            <h3 className="text-2xl sm:text-4xl font-semibold text-gray-700 mb-2">
              Your Courses
            </h3>
            <ul className="space-y-4 sm:space-y-8">
              {user?.coursesReg?.length === 0 ? (
                <p className="text-gray-500 p-4">
                  You are not enrolled in any courses yet.
                </p>
              ) : (
                user?.coursesReg?.map((course, index) => (
                  <li
                    key={index}
                    className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between border-8 rounded-xl"
                  >
                    <div className="w-full sm:w-auto">
                      <p className="text-xl sm:text-3xl font-semibold text-gray-900">
                        {course.name}
                      </p>
                      <p className="text-sm sm:text-lg text-gray-500">
                        by: <strong>{course.instructor}</strong> {"  "} due
                        date: <strong>{course.duration}</strong>
                      </p>
                      <progress
                        value={completeStates[index] ? 100 : extractNumber()}
                        max="100"
                        className="w-full   rounded-r-lg"
                      ></progress>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 sm:mt-0">
                      <button
                        className="bg-blue-500 text-white px-4 py-1 rounded-lg text-sm hover:bg-green-500 duration-300 hover:scale-105"
                        onClick={() => {
                          navigate(`/course/${course.id}`);
                        }}
                      >
                        View Details
                      </button>
                      <button
                      disable={completeStates[index]}
                        className="bg-green-500 text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-500 duration-300 hover:scale-105"
                        onClick={() => handleComplete(index)}
                      >
                        {completeStates[index] ? "Completed " : "Mark Complete" }
                      </button>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-red-500 rounded-xl p-3 font-semibold text-lg sm:text-xl hover:bg-green-500 duration-500 hover:text-white"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
