
import React from "react";

const Header: React.FC = () => {
  return (
    <div className='all'>
      <div className='all1'>
        <i className="fa-solid fa-graduation-cap"></i>
        <h4><span>Freshman</span>EXAM</h4>
      </div>

      {/* Navigation Menu */}
      <nav className='all2'>
        <a href="#">Home</a>
        <a href="#">Course</a>
        <a href="#">Blog</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      {/* Search Box */}
      <div className='all3'>
        <button><a href="#">Login</a></button>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            className="form-control"
            placeholder="Search ..."
          />
        </div>
        <i className="fa-solid fa-moon moon"></i>
        <a href="#" className="profile"><p>J</p></a>
      </div>
    </div>
   
      );
    };
    

export default Header;
