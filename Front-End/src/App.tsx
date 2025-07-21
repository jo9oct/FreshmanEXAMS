import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import About from "./Pages/About.tsx";
import Admin from "./Pages/Admin.tsx";
import Home from "./Pages/Home.tsx";
import AdminLogin from "./Pages/AdminLogin.tsx";
import Blog from "./Pages/Blog.tsx";
import Contact from "./Pages/Contact.tsx";
import Courses from "./Pages/Courses.tsx";
import UserLogin from "./Pages/UserLogin.tsx";
import UserRegister from "./Pages/UserRegister.tsx";
import { Routes, Route } from "react-router-dom";
import BlogDetail from "./Pages/BlogDetail.tsx";
import { MainLayout } from "./components/ui/MainLayout.tsx";
import { AdminMenuLayout } from "./components/ui/AdminMenuLayout.tsx";

<<<<<<< HEAD
import AdminAnalytics from "./Pages/AdminAnalytics.tsx";
import AdminBlogPost from "./Pages/AdminBlogPost.tsx";
import AdminChapters from "./Pages/AdminChapters.tsx";
import AdminCourse from "./Pages/AdminCourse.tsx";
import AdminQuestions from "./Pages/AdminQuestions.tsx";
=======
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import './index.css'
import { Routes, Route } from 'react-router-dom'

import { MainLayout } from './components/ui/MainLayout.tsx'
import { AdminMenuLayout } from './components/ui/AdminMenuLayout.tsx'

import About from "./Pages/About.tsx"
import Home from "./Pages/Home.tsx"
import Blog from "./Pages/Blog.tsx"
import Contact from "./Pages/Contact.tsx"
import Courses from "./Pages/Courses.tsx"
import UserLogin from "./Pages/UserLogin.tsx"
import UserRegister from "./Pages/UserRegister.tsx"
import ChapterView from "./Pages/ChapterView.tsx"
import QuizTimer from "./Pages/QuizTimer.tsx"
import BlogDetail from  './Pages/BlogDetail.tsx'
import QuizMode from './Pages/QuizMode.tsx'
import Result from './Pages/Result.tsx'

import AdminLogin from "./Pages/AdminLogin.tsx"
import Admin from "./Pages/Admin.tsx"
import AdminAnalytics from "./Pages/AdminAnalytics.tsx"
import AdminBlogPost from "./Pages/AdminBlogPost.tsx"
import AdminChapters from "./Pages/AdminChapters.tsx"
import AdminCourse from "./Pages/AdminCourse.tsx"
import AdminQuestions from "./Pages/AdminQuestions.tsx"
>>>>>>> 8788c92 (first front with back commit)

import Try from './Pages/try.tsx'


function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/Userlogin" element={<UserLogin />} />
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/try" element={<Try />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog/detail" element={<BlogDetail />} />
          <Route path="/Chapter/:CourseCode" element={<ChapterView />} />
          <Route path="/Course/quizTime" element={<QuizTimer />} />
          <Route path="/Course/QuizMode" element={<QuizMode />} />
          <Route path="/Course/Result" element={<Result />} />
        </Route>
        <Route element={<AdminMenuLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/admin/BlogPost" element={<AdminBlogPost />} />
          <Route path="/admin/chapters" element={<AdminChapters />} />
          <Route path="/admin/course" element={<AdminCourse />} />
          <Route path="/admin/question" element={<AdminQuestions />} />
        </Route>
      </Routes>
    </>
  );
<<<<<<< HEAD
=======
  
>>>>>>> 8788c92 (first front with back commit)
}

export default App;
