

import React from "react";
import type { Chapter,Course } from "../types/Course.ts";
import { useNavigate } from 'react-router-dom';   

type ChapterCardsProps = {
  data: Chapter;
};

const CourseDetail: React.FC<ChapterCardsProps> = ({data}) => {

    const navigate=useNavigate() 

    return (
        
        <>
            
            <ul className=" shadow-lg rounded-2" style={{boxSizing:"border-box"}}>
                <li className="col row p-3">
                    <h3 className="mb-3">Chapter {data.ChapterNumber}: {data.ChapterTitle}</h3>
                    <div className="d-flex justify-content-between mb-3 gap-2 flex-wrap">
                        <p className="">{data.ChapterDescription}</p>
                        <button className=" rounded-3 d-flex flex-nowrap justify-content-center align-items-center px-4 pt-2" style={{maxHeight:"50px" , borderColor:"#179227"}}><p>1</p><p>Questions</p> </button>
                    </div>
                    <div className="d-flex gap-3 flex-sm-row flex-column">
                        <button className="p-2 w-100 w-sm-50 rounded-1 text-white border-0" style={{backgroundColor:"#179227"}} onClick={() => navigate(`/courses`)}>View course</button>
                        <button className="p-2 w-100 w-sm-50 rounded-1 bg-white" style={{borderColor:"1px solid #EBE6E6"}}>Quick Start Quiz</button>
                    </div>
                </li>
            </ul>

        </>

    );
};


export default CourseDetail;

