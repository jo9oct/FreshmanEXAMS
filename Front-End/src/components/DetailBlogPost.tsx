

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {formatDate} from "../lib/utils.ts";

const DetailBlogPost: React.FC = () => {

    const location=useLocation()
    const blogData = location.state?.BlogData;

    const navigation =useNavigate()

    return (
        <> 

                <button className="back d-flex justify-content-center align-items-center gap-2 border-0 px-4 py-2 mt-5 rounded text-white" style={{marginLeft:"10rem" ,backgroundColor:"#041826b9"}} onClick={() => navigation("/blog")}><i className="fa-solid fa-left-long"></i> Back</button>
                <div className="d-flex justify-content-center align-items-center flex-column py-5">
                    <div className="col-5 justify-content-center">
                        <p className="shadow text-center py-2 w-100">Study Tip 👇</p>
                        <h1 className="my-5">{blogData.BlogTitle}</h1>
                        <div className="d-flex align-items-center gap-4 mb-3  border-bottom border-top p-2">
                            <div className="d-flex justify-content-center align-items-center rounded-circle fs-2" style={{backgroundColor:"tomato" , width:"50px" , height:"50px"}}>J</div>
                            <div className="d-flex align-items-center gap-5">
                                <p>Sohail Saifi</p>
                                <p className="text-black-50">• {blogData.BlogTime} min read</p>
                                <p className="text-black-50">• {formatDate(new Date (blogData?.createdAt))}</p>
                            </div>
                        </div>
                        <div className="my-4">
                            <img src={blogData.BlogImg} alt="Blog Image" />
                        </div>
                        <p>{blogData.BlogDescription}</p>
                        <h3>{blogData.BlogSlug}</h3>
                        <p>{blogData.BlogContent}</p>
                        <p className="fw-semibold" style={{fontSize:"large"}}>Related tip : <a href={blogData.BlogTag}>{blogData.BlogTag}</a></p>
                    </div>
                </div>

        </>
    );
};


export default DetailBlogPost;
 