

import React from "react";

const DetailBlogPost: React.FC = () => {
    return (
        <> 
        
            <div className="card d-f shadow border-0" style={{ width: '60rem'}}>
                <img src="/public/images (3).jpg" className="card-img-top" alt="..." />
                <div className="card-body" >
                    <div className="d-flex justify-content-between">
                        <p className="bg-c-green">Study Tip</p>
                        <div className="d-flex justify-content-between gap-2"><img src="/public/clock.png" alt="image" width={20} height={20} className="mt-1"/><p>8 min read</p></div>
                    </div>
                    <h5 className="card-title">University Study Tips for Ethiopian Students</h5>
                    <p className="card-text">Discover proven strategies and techniques to excel in your Ethiopian University Freshman Exam — from </p>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between gap-2"><img src="/public/group.png" alt="image" width={20} height={20}/><p>Academic Team</p></div>
                        <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>

        </>
    );
};


export default DetailBlogPost;
 