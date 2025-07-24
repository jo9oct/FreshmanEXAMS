
import React from "react";
import type { blog } from "../types/Blog";
import { Link } from "react-router-dom";

type BlogCardsProps = {
  data: blog;
};

const BlogPost: React.FC<BlogCardsProps> = ({data}) => {
    return (
        <>
    
                <div className="card h-100 shadow border-0">
                    <img src={data.BlogImg} className="card-img-top" alt="Blog Image"  height={"300px"}/>
                    <div className="card-body">
                        <div className="d-flex justify-content-between mb-2">
                            <p className="bg-c-green px-2 rounded text-white">Study Tip</p>
                            <div className="d-flex align-items-center gap-2">
                                <img src="/public/clock.png" alt="clock" width={20} height={20} />
                                <p className="mb-0">{data.BlogTime} min read</p>
                            </div>
                        </div>
                        <h5 className="card-title">{data.BlogTitle}</h5>
                        <p className="card-text">{data.BlogDescription}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-2">
                                <img src="/public/group.png" alt="group" width={20} height={20} />
                                <p className="mb-0">Academic Team</p>
                            </div>
                           <Link to="/blog/detail" state={{ BlogData : data }}><a href="#" className="btn btn-primary">Read More</a></Link>
                        </div>
                    </div>
                </div>
                
        </>
    );
};


export default BlogPost;
 