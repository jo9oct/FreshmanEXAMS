
import React,{ useState} from "react";

const Header: React.FC = () => {


  const [change,setChange]=useState(false);

  const toggleMenu=()=>{
     setChange(!change)
  }

  return (
    <header className="d-flex flex-row justify-content-around align-items-center p-4 position-fixed w-100 top-0 z-1 bg-white">
      <div className='all1 d-flex align-items-center gap-2 '>
        <i className="fa-solid fa-graduation-cap fs-4"></i>
        <h4><span>Freshman</span>EXAM</h4>
      </div>
 
      {/* Navigation Menu */}
      <nav className={`all2 ${change ? "" : "hide"}`}>
        <a href="/" className=" text-decoration-none">Home</a>
        <a href="/courses" className="text-decoration-none">Course</a>
        <a href="/blog" className=" text-decoration-none">Blog</a>
        <a href="about" className=" text-decoration-none">About</a>
        <a href="contact" className=" text-decoration-none">Contact</a>
        <div className="s1">
          <a href="#" className="text-dark text-decoration-none">Login</a>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              className="form-control"
              placeholder="Search ..."
            />
          </div>
        </div>
      </nav>

      {/* Search Box */}
      <div className='all3 d-flex gap-4 align-items-center'>
        <button className="loginD rounded-2 px-3 py-1 shadow"><a href="#" className="text-dark text-decoration-none">Login</a></button>
        <div className="search searchD">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            className="form-control"
            placeholder="Search ..."
          />
        </div>
        <i className="fa-solid fa-moon moon fs-4"></i>
        <a href="#" className="profile p-0 rounded-circle d-flex justify-content-center align-items-center text-dark text-decoration-none "><p className="text-white fs-5 mt-3">J</p></a>
      </div>
      <div className="icon-hide">
        <i className="fa-solid fa-moon moon fs-4" style={{cursor:"pointer"}}></i>
        <a href="#" className="profile p-0 rounded-circle d-flex justify-content-center align-items-center text-dark text-decoration-none "><p className="text-white fs-5 mt-3">J</p></a>
        <i className={`menu fa-solid ${change ? "fa-x" : "fa-bars" }`} onClick={toggleMenu}></i>
      </div>
    </header>
   
      );
    };
    

export default Header;
