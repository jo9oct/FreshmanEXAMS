
import React, { useState,useEffect } from "react";
// import CourseCards from "../components/CourseCards.tsx"
import axios from "axios"
import toast  from "react-hot-toast";
import Loader1 from "../components/ui/Loader1"
import type { course } from "../types/Course";


const Try: React.FC = () => {
    
    const [IsRateLimited,setIsRateLimited] = useState(false)
    const [CourseData,setCourseData] = useState<course[]>([])
    const [Loading,setLoading] = useState(true)

    useEffect(() => {
        const fetchData=async () => {
            try{
                const res=await axios.get<course[]>('http://localhost:5000/api/course')
                console.log(res.data)
                setCourseData(res.data)
                setIsRateLimited(false)
            }
            catch(error){
                console.log("error fetching notes" , error)
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
            {Loading && <Loader1/>}
            {
                <div>
                {CourseData.map((data: course, index: number) => (
                    <div key={index}>
                    <h3>Hello</h3>
                    <h3>{data.CourseId}</h3>
                    <h3>{data.CourseTitle}</h3>
                    <p>{data.CourseDescription}</p>
                    </div>
                ))}
                </div>
            }
            {IsRateLimited && <h1>time limit ended</h1>}
        </>
    ); 

};


export default Try;