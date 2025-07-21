

import React, { useEffect, useState } from "react";
import { useParams ,useLocation } from "react-router-dom";
import CourseDetail from "../components/CourseDetail";
import type { Chapter,Course } from "../types/Course.ts";
import api from "../lib/axios.tsx"
import axios  from "axios";
import toast from "react-hot-toast";
import Loader1 from "../components/ui/Loader1.tsx";
import RateLimitWarning from "../components/ui/TimeLimit.tsx";


const ChapterView: React.FC = () => {

    const [Loading,setLoading]=useState(true)
    const [IsRateLimited,setIsRateLimited] = useState(false)
    const [ChapterData,setChapterData]=useState<Chapter[]>([])

    const location=useLocation()
    const CourseData=location.state?.courseData

    const {CourseCode}=useParams()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await api.get<Course[]>("/chapter");
    
           const  matchedCourse = res.data.find(
              (course) => course.CourseCode === CourseCode
            );
    
            if (matchedCourse) {
              console.log(matchedCourse);
              setChapterData(matchedCourse.Chapters);
              setIsRateLimited(false);
            } else {
              console.log("No course found with CourseCode:", CourseCode);
            }
          } catch (error) {
            console.error("Error fetching data:", error);
    
            if (axios.isAxiosError(error) && error.response?.status === 429) {
              setIsRateLimited(true);
            } else {
              toast.error("Failed to load chapters");
            }
          } finally {
            setLoading(false);
          }
        };
    
        if (CourseCode) fetchData(); // ✅ safe check
      }, [CourseCode]);

    return (

        <>
            
            <h2 className="text-black-50" style={{marginLeft:"60px"}}>Courses: <span>{CourseData.CourseTitle}</span></h2>
            <div className="shadow-sm p-4 mx-xl-5 mx-lg-3 mx-sm-2 mx-0 my-4">
                <h2 className="d-flex gap-3"><img src="/public/stack-of-books.png" alt="icon" width={54} height={54}/><span>{CourseData.CourseTitle}</span></h2>
                <div className="" style={{marginLeft:"80px"}}>
                    <p>{CourseData.CourseDescription}</p>
                    <div className="row gap-2">
                        <div className="col d-flex flex-nowrap gap-2"><p>{ChapterData.length}</p><p>Chapters</p></div>
                        <div className="col d-flex flex-nowrap gap-2"><p>100</p><p>Questions</p></div>
                        <div className="col d-flex flex-nowrap gap-2"><p>100</p><p>Questions</p></div>
                    </div>
                </div>
            </div>
 
            <div className="row gap-3 mx-xl-5 mx-lg-3 mx-sm-2 mx-0"  >

               <div className="chapterList col-12 col-lg-8 col-sm-12 my-4" style={{boxSizing:"border-box"}}> 

                    {Loading ? (
                        <Loader1 />
                    ) : IsRateLimited ? (
                        <RateLimitWarning />
                    ) : ChapterData.length > 0 ? (
                        ChapterData.map((chapter: Chapter) => (
                        <div key={chapter._id}>
                            <CourseDetail data={chapter} />
                        </div>
                        ))
                    ) : (
                        <p className="text-muted d-flex justify-content-center align-items-center gap-2"  style={{height:"65vh",fontSize:"xx-large"}}><span className="text-danger fw-bold fs-2">No chapters </span> available for this course.</p>
                    )}
                </div>

                <div className="col-12 col-lg-3 col-sm-12 d-flex flex-column gap-4 mb-4">
                    <div className="d-flex flex-column gap-2 shadow-sm p-3 mb-3">
                        <p>Quick Actions</p>
                        <button className=" rounded-1 p-2 rounded-1 text-white border-0" style={{backgroundColor:"#179227"}}>Start First Chapter</button>
                        <button className="rounded-1 p-2 rounded-1 bg-white"  style={{borderColor:" #EBE6E6"}}>Random Quiz</button>
                        <button className="rounded-1 p-2 rounded-1 bg-white"  style={{borderColor:" #EBE6E6"}}>Practice Mode</button>
                    </div>
                    <div className="col shadow-sm p-3" style={{maxHeight:"250px"}}>
                        <p className="fw-bold fs-4">Course Statistics</p>
                        <div className="d-flex justify-content-between"><p>Total Chapters:</p><p className="text-muted">{ChapterData.length}</p></div>
                        <div className="d-flex justify-content-between"><p>Total Questions::</p><p className="text-muted">23</p></div>
                        <div className="d-flex justify-content-between"><p>Difficulty:</p><p className="text-muted">23</p></div>
                        <div className="d-flex justify-content-between"><p>Estimated Time::</p><p className="text-muted">23</p></div>
                    </div>
                </div>
            </div>

        </>

    );
};

 
export default ChapterView;