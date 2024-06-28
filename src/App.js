import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

const App = () => (
  <Router className="w-screen h-screen">
    <Navbar />
    <Routes>
      <Route path="/" element={<CoursesPage />} />
      <Route path="/course/:id" element={<CourseDetailsPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
