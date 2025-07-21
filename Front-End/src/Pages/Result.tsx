
import React from "react";
import Answer from "../components/Answer";

const Result: React.FC = () => {


    return (
        <>
            
            <div className="shadow m-5 rounded-5 p-5">
                <p className="text-center fs-3 fw-semibold">Quiz Complete!</p>
                <p className="text-center fs-4" style={{color:"#22CA39"}}>33%</p>
                <p className="text-center text-black-50 mb-5">You got 1 out of 3 questions correct</p>
                <p className="fs-5 mb-4">Review Your Answers:</p>
                <Answer/>
                <div className="mt-5 d-flex justify-content-center gap-5">
                    <button className="px-5 py-2 btn rounded-2 text-white" style={{width:"300px" , backgroundColor:"#1FC735"}}>Retake Quiz</button>
                    <button className="px-5 py-2 btn rounded-2 text-white" style={{width:"300px" , backgroundColor:"#041826b9"}}>Back To Course</button>
                </div>
            </div> 

        </>
    );
};


export default Result;