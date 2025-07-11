
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import About from "./Pages/About.tsx"
import Admin from "./Pages/Admin.tsx"
import Home from "./Pages/Home.tsx"
import AdminLogin from "./Pages/AdminLogin.tsx"
import Blog from "./Pages/Blog.tsx"
import BlogPost from "./Pages/BlogPost.tsx"
import Contact from "./Pages/Contact.tsx"
import Courses from "./Pages/Courses.tsx"
import UserLogin from "./Pages/UserLogin.tsx"
import UserRegister from "./Pages/UserRegister.tsx"
import { Routes, Route } from 'react-router-dom';

function App() {
 
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogpost" element={<BlogPost />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/userlogin" element={<UserLogin />} />
      <Route path="/userregister" element={<UserRegister />} />
    </Routes>
  );
  
   
}

export default App
