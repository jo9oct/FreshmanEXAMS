
import React from "react";
import {Link} from  "react-router-dom"
import type { course } from "../types/Course";

type CourseCardsProps = {
  data: course;
};

const CourseCards: React.FC<CourseCardsProps> = ({data}) => {

  return (

            <div className="card shadow rounded-3 p-3 h-100">
                <div className="d-flex align-items-center gap-3 mb-2">
                <img src="/stack-of-books.png" alt="course icon" width={30} height={30} />
                <h5 className="mb-0">{data.CourseTitle}</h5>
                </div>
                <p>{data.CourseDescription}</p>
                <div className="d-flex justify-content-between mb-2">
                <p className="mb-0">10 Chapters</p>
                <p className="mb-0">100 Questions</p>
                </div>
                <Link to={`/Chapter/${data.CourseCode}`}  state={{ courseData : data }} className="btn text-white mb-2" style={{ backgroundColor: "#179227" , textDecoration: 'none', color: 'inherit' }}>View Chapters</Link>
                <button className="btn bg-light text-dark" style={{ border: "1px solid #E0D4D4" }}>Quick Start Quiz</button>
            </div>

        );
    
};


export default CourseCards;

