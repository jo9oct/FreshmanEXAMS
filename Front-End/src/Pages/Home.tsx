

import React, { useState,useEffect } from "react";
import CourseCards from "../components/CourseCards.tsx"
import axios from "axios"
import toast  from "react-hot-toast";
import Loader1 from "../components/ui/Loader1"
import type { course } from "../types/Course";
import api from "../lib/axios.tsx";
import RateLimitWarning from "../components/ui/TimeLimit.tsx"
import HomeUi from "../components/ui/HomeUi.tsx";
import { useNavigate } from "react-router-dom";

const Courses: React.FC = () => {

    const navigation=useNavigate();
    
    const [IsRateLimited,setIsRateLimited] = useState(false)
    const [CourseData,setCourseData] = useState<course[]>([])
    const [Loading,setLoading] = useState(true)

    useEffect(() => {
        const fetchData=async () => {
            try{
                const res=await api.get<course[]>('/course')
                console.log(res.data)
                setCourseData(res.data)
                setIsRateLimited(false)
            }
            catch(error){
                console.log("error fetching Data" , error)
                if (axios.isAxiosError(error) && error.response?.status === 429) {
                    setIsRateLimited(true);
                }
                else{
                    toast.error("Failed to load blogs")
                }
            }
            finally{
                setLoading(false)
            }
        }

        fetchData()
    },[])


    return (
        <>  
            <HomeUi />

             {Loading && <Loader1 />}
            {CourseData.length > 0 && !IsRateLimited && (

                <div className="container py-5">
                    <div className="row gx-4 gy-4">
                        {CourseData.slice(0, 3).map((data: course) => (
                            <div key={data._id} className="col-12 col-md-6 col-lg-4">
                            <CourseCards data={data} />
                            </div>
                        ))}
                    </div>
                </div>

            )}
            {IsRateLimited && <RateLimitWarning/>}

            <div className="text-center">
                <button className="my-5 py-2 px-4 rounded-3 bg-white text-shadow" style={{ border: "1px solid #D6D6D6" }} onClick={() => navigation("/courses")}>
                    View All Courses
                </button>
            </div>
        </>
    ); 

};


export default Courses;