
import React, { useState,useEffect } from "react";
import axios from "axios"
import toast  from "react-hot-toast";
import Loader1 from "../components/ui/Loader1"
import api from "../lib/axios.tsx";
import RateLimitWarning from "../components/ui/TimeLimit.tsx";
import type { blog } from "../types/Blog";
import BlogPost from "../components/BlogPost.tsx";

const Blogs: React.FC = () => {

      const [IsRateLimited,setIsRateLimited] = useState(false)
      const [BlogData,setBlogData] = useState<blog[]>([])
      const [Loading,setLoading] = useState(true)

      useEffect(() => {
         const fetchData=async () => {
            try{
                  const res=await api.get<blog[]>('/blog')
                  console.log(res.data)
                  setBlogData(res.data)
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

            <div className="container py-3">

               <div className="card mb-5 shadow border-0">
                  <div className="row g-0 flex-column flex-md-row">
                     <div className="col-md-4">
                           <img
                              src="/public/images1.jpg"
                              className="img-fluid rounded-start w-100 h-100"
                              alt="..."
                              style={{ objectFit: 'cover' }}
                           />
                     </div>
                     <div className="col-md-8">
                           <div className="card-body">
                              <div className="tip d-flex flex-wrap align-items-center justify-content-between mb-3">
                                 <div
                                       className="d-flex gap-2 align-items-center btn btn-sm"
                                       style={{ backgroundColor: "#D6F5DC", color: "#179227" }}
                                 >
                                       <p className="mb-0">Study Tip</p>
                                 </div>
                                 <div className="d-flex gap-2 align-items-center">
                                       <img src="/public/group.png" alt="group" width={20} height={20} />
                                       <p className="mb-0">Academic Team</p>
                                 </div>
                                 <div className="d-flex gap-2 align-items-center">
                                       <img src="/public/clock.png" alt="clock" width={20} height={20} />
                                       <p className="mb-0">8 min read</p>
                                 </div>
                              </div>
                              <h5 className="card-title">How to Prepare for the Freshman Exam: A Complete Guide</h5>
                              <p className="card-text">
                              Discover proven strategies and techniques to excel in your Ethiopian University Freshman Exam —
                              from creating a study schedule to mastering exam techniques.
                              </p>
                              <a href="#" className="btn btn-primary">Read Full Article</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
                  <div className="d-flex justify-content-center container mb-4">
                        {Loading ? (
                           <Loader1 />
                        ) : IsRateLimited ? (
                           <RateLimitWarning />
                        ) : BlogData.length > 0 ? (
                           
                                 <div className="row justify-content-start">
                                    {BlogData.map((data: blog) => (
                                          <div key={data._id} className="col-12 col-md-5 col-lg-4 mb-4">
                                          <BlogPost data={data} />
                                          </div>
                                    ))}
                                 </div>
                        ) : (
                           <p className="text-muted d-flex justify-content-center align-items-center gap-2"  style={{height:"65vh",fontSize:"xx-large"}}><span className="text-danger fw-bold fs-2">No chapters </span> available for this course.</p>
                        )}
                  </div>

         </>
      ); 

};


export default Blogs;