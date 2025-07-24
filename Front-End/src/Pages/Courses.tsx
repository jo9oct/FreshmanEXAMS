
import React, { useState,useEffect } from "react";
import CourseCards from "../components/CourseCards.tsx"
import axios from "axios"
import toast  from "react-hot-toast";
import Loader1 from "../components/ui/Loader1"
import type { course } from "../types/Course";
import api from "../lib/axios.tsx";
import RateLimitWarning from "../components/ui/TimeLimit.tsx"

const Courses: React.FC = () => {
    
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

            <div className="d-flex flex-column justify-content-center align-items-center container text-center">
                <h2>All Freshman Courses</h2>
                <p className="col-5">Choose from our comprehensive collection of Ethiopian university freshman courses. 
                    Each course includes chapter-based quizzes with instant feedback.</p>
                <div className="d-flex justify-content-center align-items-center mb-4 w-25 mt-5 shadow-sm" style={{border: '1px solid #ccc', borderRadius: '5px'}}>
                    <i className="fa-solid fa-magnifying-glass mx-3 " ></i>
                    <input 
                        type="search"
                        className="form-control fa-solid fa-magnifying-glass border-0"
                        placeholder="Search ..."
                    />
                </div>
            </div>

            {Loading && <Loader1 />}
            {CourseData.length > 0 && !IsRateLimited && (

                <div className="container py-5">
                    <div className="row gx-4 gy-4">
                        {CourseData.map((data: course) => (
                            <div key={data._id} className="col-12 col-md-6 col-lg-4">
                            <CourseCards data={data} />
                            </div>
                        ))}
                    </div>
                </div>

            )}
            {IsRateLimited && <RateLimitWarning/>}
        </>
    ); 

};


export default Courses;