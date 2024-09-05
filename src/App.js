import React from 'react';
import { Routes, Route, Router, redirect, Navigate } from 'react-router-dom';
import HomePage from './components/Home/Home';
import LoginSignup from './components/LoginSignup/LoginSignup';
import ResetPassword from './components/Resetpassword/ResetPassword';
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import PrivateRoute from "./router/PrivateRoute";
import AuthProvider from "./hooks/AuthProvider";
import Admin from "./pages/Admin";
import Categories from './components/Categories/Categories';
import Cart from './components/Cart/Cart';
import Profile from "./components/Profile";
import ManageStudents from "./components/ManageStudents";
import ManageCategories from "./components/ManageCategories";
import ManageTeachers from "./components/ManageTeachers";
import CourseGrid from './components/Courses/CourseGrid';
import CourseDetails from './components/Courses/CourseDetails';
import VideoDetails from './components/Courses/VideoDetails';
import VideoPlayer from './components/Courses/VideoPlayer';

// Other imports...

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/cart' element={<Cart />} />

        <Route element={<PrivateRoute />}>
          <Route path="/board" element={<DashBoard />} />
        </Route>


        <Route path="admin" element={<Admin />}>
          <Route path="" action={() => <Navigate to={"./profile"} />} loader={() => <Navigate to={"./profile"} />} />
          <Route path="manage-users" element={<ManageStudents />} />
          <Route path="manage-categories" element={<ManageCategories />} />
          <Route path="manage-courses" element={<ManageTeachers />} />
        </Route>

        // Course routes
        <Route path="/courses" element={<CourseGrid />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/course/:courseId/video/:videoId" element={<VideoDetails />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />



      </Routes>
    </AuthProvider>
  );
};

export default App;
