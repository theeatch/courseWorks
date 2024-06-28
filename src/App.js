import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';

const App = () => (
  <Router className="w-screen h-screen">
    <Routes>
      <Route path="/" element={<CoursesPage />} />
      <Route path="/course/:id" element={<CourseDetailsPage />} />
    </Routes>
  </Router>
);

export default App;
