
import React,{ useState} from "react";

const Header: React.FC = () => {

    const savedTeam = localStorage.getItem("Team");
    const initialToggle = savedTeam === null ? false : savedTeam === "false";

    const [toggleLight, setToggleLight] = useState(initialToggle);

    const LightDark = () => {
        setToggleLight(prev => !prev);
        localStorage.setItem("Team", toggleLight.toString());
    };


  return (
    
        <header className={` d-flex p-4 justify-content-between align-items-center gap-5 ${toggleLight ? "HeaderToggle" : ""}`} >
            <div className='all1 d-flex align-items-center gap-2' style={{paddingLeft:"30px"}}>
                <i className="fa-solid fa-graduation-cap fs-4"></i>
                <h4><span>Freshman</span>EXAM</h4>
            </div>
            <i className={`fa-solid moon fs-4  ${toggleLight ? "fa-sun" : "fa-moon"} `} style={{cursor:"pointer" , paddingRight:"50px"}} onClick={LightDark}></i>
        </header>

      );
    };
    

export default Header;
