import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = window.location.pathname;
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const getLinkClass = (path) => {
    return `text-3xl font-bold text-black/50 flex items-center hover:text-4xl hover:text-black hover:underline duration-300 hover:cursor-pointer ${
      currentPath === path ? "text-blue-300 scale-105 underline" : ""
    }`;
  };

  return (
    <div className="fixed top-0 w-full z-50 h-24 bg-slate-800/40 rounded-b-xl shadow-md shadow-slate-500/80 flex justify-center items-center backdrop-blur-xl">
      <div className="md:flex hidden w-full justify-evenly">
        <div className={getLinkClass("/courses")}>
          <a href="/courses">Courses</a>
        </div>
        <div className={getLinkClass("/")}>
          <svg
            id="logo-62"
            width="80"
            height="80"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="stroke"
              d="M25 29.53C29.6944 29.53 33.5 27.5018 33.5 25C33.5 22.4981 29.6944 20.47 25 20.47C20.3056 20.47 16.5 22.4981 16.5 25C16.5 27.5018 20.3056 29.53 25 29.53Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 29.98C30.4787 29.98 34.92 27.7504 34.92 25C34.92 22.2496 30.4787 20.02 25 20.02C19.5214 20.02 15.08 22.2496 15.08 25C15.08 27.7504 19.5214 29.98 25 29.98Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 30.4401C31.2629 30.4401 36.34 28.0045 36.34 25.0001C36.34 21.9956 31.2629 19.5601 25 19.5601C18.7371 19.5601 13.66 21.9956 13.66 25.0001C13.66 28.0045 18.7371 30.4401 25 30.4401Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 30.8901C32.0471 30.8901 37.76 28.2531 37.76 25.0001C37.76 21.7471 32.0471 19.1101 25 19.1101C17.9528 19.1101 12.24 21.7471 12.24 25.0001C12.24 28.2531 17.9528 30.8901 25 30.8901Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 31.3499C32.8259 31.3499 39.17 28.5069 39.17 24.9999C39.17 21.4929 32.8259 18.6499 25 18.6499C17.1741 18.6499 10.83 21.4929 10.83 24.9999C10.83 28.5069 17.1741 31.3499 25 31.3499Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 31.7999C33.6101 31.7999 40.59 28.7555 40.59 25C40.59 21.2444 33.6101 18.2 25 18.2C16.3899 18.2 9.40997 21.2444 9.40997 25C9.40997 28.7555 16.3899 31.7999 25 31.7999Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 32.26C34.3944 32.26 42.01 29.0096 42.01 25C42.01 20.9904 34.3944 17.74 25 17.74C15.6056 17.74 7.98999 20.9904 7.98999 25C7.98999 29.0096 15.6056 32.26 25 32.26Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 32.71C35.1786 32.71 43.43 29.2582 43.43 25C43.43 20.7419 35.1786 17.29 25 17.29C14.8214 17.29 6.57001 20.7419 6.57001 25C6.57001 29.2582 14.8214 32.71 25 32.71Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 33.1601C35.9629 33.1601 44.85 29.5067 44.85 25.0001C44.85 20.4934 35.9629 16.8401 25 16.8401C14.0372 16.8401 5.15002 20.4934 5.15002 25.0001C5.15002 29.5067 14.0372 33.1601 25 33.1601Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 33.6199C36.7471 33.6199 46.27 29.7606 46.27 24.9999C46.27 20.2392 36.7471 16.3799 25 16.3799C13.2529 16.3799 3.72998 20.2392 3.72998 24.9999C3.72998 29.7606 13.2529 33.6199 25 33.6199Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 34.0699C37.5313 34.0699 47.69 30.0092 47.69 24.9999C47.69 19.9907 37.5313 15.9299 25 15.9299C12.4687 15.9299 2.31 19.9907 2.31 24.9999C2.31 30.0092 12.4687 34.0699 25 34.0699Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 34.53C38.3101 34.53 49.1 30.2632 49.1 25C49.1 19.7367 38.3101 15.47 25 15.47C11.69 15.47 0.900024 19.7367 0.900024 25C0.900024 30.2632 11.69 34.53 25 34.53Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
          </svg>
          <a href="/">CourseHub</a>
        </div>
        <div className={getLinkClass("/dashboard")}>
          <a href="/dashboard">Dashboard</a>
        </div>
      </div>
      {/* mobile ver */}
      <div className="w-full md:hidden flex items-center gap-6 p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-menu cursor-pointer z-50 ${
            menuOpen ? "ml-10" : ""
          }`}
          onClick={handleMenuClick}
        >
          <line
            className={`transition-transform origin-center ${
              menuOpen ? "rotate-45 -translate-x-1 translate-y-1" : ""
            }`}
            x1="4"
            x2="20"
            y1="6"
            y2="6"
          />
          <line
            className={`transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            x1="4"
            x2="20"
            y1="12"
            y2="12"
          />
          <line
            className={`transition-transform origin-center ${
              menuOpen ? "-rotate-45 -translate-x-1  -translate-y-1" : ""
            }`}
            x1="4"
            x2="20"
            y1="18"
            y2="18"
          />
        </svg>
        {menuOpen ? (
          <div className="w-1/2 absolute top-20 left-0 rounded-br-xl bg-slate-500 flex flex-col justify-end">
            <div className="text-center text-2xl text-black/60 font-bold p-3 underline">
              <a href="/dashboard">Dashboard</a>
            </div>
            <div className="text-center text-2xl text-black/60 font-bold p-3 underline">
              <a href="/courses">Courses</a>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="text-4xl font-bold text-black/50 flex items-center ">
          <svg
            id="logo-62"
            width="60"
            height="60"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="stroke"
              d="M25 29.53C29.6944 29.53 33.5 27.5018 33.5 25C33.5 22.4981 29.6944 20.47 25 20.47C20.3056 20.47 16.5 22.4981 16.5 25C16.5 27.5018 20.3056 29.53 25 29.53Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 29.98C30.4787 29.98 34.92 27.7504 34.92 25C34.92 22.2496 30.4787 20.02 25 20.02C19.5214 20.02 15.08 22.2496 15.08 25C15.08 27.7504 19.5214 29.98 25 29.98Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 30.4401C31.2629 30.4401 36.34 28.0045 36.34 25.0001C36.34 21.9956 31.2629 19.5601 25 19.5601C18.7371 19.5601 13.66 21.9956 13.66 25.0001C13.66 28.0045 18.7371 30.4401 25 30.4401Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 30.8901C32.0471 30.8901 37.76 28.2531 37.76 25.0001C37.76 21.7471 32.0471 19.1101 25 19.1101C17.9528 19.1101 12.24 21.7471 12.24 25.0001C12.24 28.2531 17.9528 30.8901 25 30.8901Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 31.3499C32.8259 31.3499 39.17 28.5069 39.17 24.9999C39.17 21.4929 32.8259 18.6499 25 18.6499C17.1741 18.6499 10.83 21.4929 10.83 24.9999C10.83 28.5069 17.1741 31.3499 25 31.3499Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 31.7999C33.6101 31.7999 40.59 28.7555 40.59 25C40.59 21.2444 33.6101 18.2 25 18.2C16.3899 18.2 9.40997 21.2444 9.40997 25C9.40997 28.7555 16.3899 31.7999 25 31.7999Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 32.26C34.3944 32.26 42.01 29.0096 42.01 25C42.01 20.9904 34.3944 17.74 25 17.74C15.6056 17.74 7.98999 20.9904 7.98999 25C7.98999 29.0096 15.6056 32.26 25 32.26Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 32.71C35.1786 32.71 43.43 29.2582 43.43 25C43.43 20.7419 35.1786 17.29 25 17.29C14.8214 17.29 6.57001 20.7419 6.57001 25C6.57001 29.2582 14.8214 32.71 25 32.71Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 33.1601C35.9629 33.1601 44.85 29.5067 44.85 25.0001C44.85 20.4934 35.9629 16.8401 25 16.8401C14.0372 16.8401 5.15002 20.4934 5.15002 25.0001C5.15002 29.5067 14.0372 33.1601 25 33.1601Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 33.6199C36.7471 33.6199 46.27 29.7606 46.27 24.9999C46.27 20.2392 36.7471 16.3799 25 16.3799C13.2529 16.3799 3.72998 20.2392 3.72998 24.9999C3.72998 29.7606 13.2529 33.6199 25 33.6199Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 34.0699C37.5313 34.0699 47.69 30.0092 47.69 24.9999C47.69 19.9907 37.5313 15.9299 25 15.9299C12.4687 15.9299 2.31 19.9907 2.31 24.9999C2.31 30.0092 12.4687 34.0699 25 34.0699Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
            <path
              class="stroke"
              d="M25 34.53C38.3101 34.53 49.1 30.2632 49.1 25C49.1 19.7367 38.3101 15.47 25 15.47C11.69 15.47 0.900024 19.7367 0.900024 25C0.900024 30.2632 11.69 34.53 25 34.53Z"
              stroke="black"
              stroke-width="0.5"
              stroke-miterlimit="10"
            ></path>
          </svg>
          CourseHub
        </div>
      </div>
    </div>
  );
};

export default Navbar;
