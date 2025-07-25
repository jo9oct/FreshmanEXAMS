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
import ChapterView from "./Pages/ChapterView.tsx";
import Result from "./Pages/Result.tsx";
import StartQuiz from "./Pages/StartQuiz.tsx";
import NotFound from "./Pages/NotFound.tsx";
import QuizModes from "./Pages/QuizModes.tsx";

import AdminAnalytics from "./Pages/AdminAnalytics.tsx";
import AdminBlogPost from "./Pages/AdminBlogPost.tsx";
import AdminChapters from "./Pages/AdminChapters.tsx";
import AdminCourse from "./Pages/AdminCourse.tsx";
import AdminQuestions from "./Pages/AdminQuestions.tsx";


function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/User/Login" element={<UserLogin />} />
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/blog/detail" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/Chapter/:CourseCode" element={<ChapterView />} />
          <Route path="/Course/StartQuiz" element={<StartQuiz />} />
          <Route path="/Course/QuizModes" element={<QuizModes />} />
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
}

export default App;
