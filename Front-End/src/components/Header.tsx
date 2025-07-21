import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {UserContext} from "../components/ui/TeamToggle"

const Header: React.FC = () => {
  // const {toggleLight,LightDark} = useContext(UserContext)
  const [change, setChange] = useState(false);

  const toggleMenu = () => {
    setChange(!change);
  };

  const savedTeam = localStorage.getItem("Team");
  const initialToggle = savedTeam === null ? false : savedTeam === "false";

  const [toggleLight, setToggleLight] = useState(initialToggle);

  const LightDark = () => {
    setToggleLight((prev) => !prev);
    localStorage.setItem("Team", toggleLight.toString());
  };

  return (
    <header
      className={` d-flex flex-row justify-content-around align-items-center p-4 position-fixed w-100 top-0 z-1  ${toggleLight ? "HeaderToggle" : ""}`}
    >
      <div className="all1 d-flex align-items-center gap-2 ">
        <i className="fa-solid fa-graduation-cap fs-4"></i>
        <h4>
          <span>Freshman</span>EXAM
        </h4>
      </div>

      {/* Navigation Menu */}
      <nav className={`all2 ${change ? "" : "hide"}`}>
        <a href="/" className=" text-decoration-none">
          Home
        </a>
        <a href="/courses" className="text-decoration-none">
          Course
        </a>
        <a href="/blog" className=" text-decoration-none">
          Blog
        </a>
        <a href="about" className=" text-decoration-none">
          About
        </a>
        <a href="contact" className=" text-decoration-none">
          Contact
        </a>
        <div className="s1">
          <a href="#" className=" text-decoration-none">
            Login
          </a>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              className="form-control"
              placeholder="Search ..."
              // style={{all:"unset" , outline:"none" , border:"none"}}
            />
          </div>
        </div>
      </nav>

      {/* Search Box */}
      <div className="all3 d-flex gap-4 align-items-center">
        <Link
          to="/UserLogin"
          className="loginD rounded-2 px-3 py-1 btn text-decoration-none"
        >
          Login
        </Link>
        <div className="search searchD">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            className="form-control"
            placeholder="Search ..."
          />
        </div>
        <i
          className={`fa-solid  moon fs-4 ${toggleLight ? "fa-sun" : "fa-moon"}`}
          onClick={LightDark}
        ></i>
        <a
          href="#"
          className="profile p-0 rounded-circle d-flex justify-content-center align-items-center text-dark text-decoration-none "
        >
          <p className="text-white fs-5 mt-3">J</p>
        </a>
      </div>
      <div className="icon-hide">
        <i
          className={`fa-solid moon fs-4 ${toggleLight ? "fa-sun" : "fa-moon"}`}
          style={{ cursor: "pointer" }}
          onClick={LightDark}
        ></i>
        <a
          href="#"
          className="profile p-0 rounded-circle d-flex justify-content-center align-items-center text-dark text-decoration-none "
        >
          <p className="text-white fs-5 mt-3">J</p>
        </a>
        <i
          className={`menu fa-solid ${change ? "fa-x" : "fa-bars"}`}
          onClick={toggleMenu}
        ></i>
      </div>
    </header>
  );
};

export default Header;
