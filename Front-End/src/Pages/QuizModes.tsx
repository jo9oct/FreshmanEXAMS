
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const QuizModes: React.FC = () => {

    const location=useLocation()
    const courseData=location.state?.data
    console.log(courseData)

    const navigate=useNavigate()

    const startTest = (value : boolean) => {
        navigate("/Course/StartQuiz" , {
            state:{
                callFunction:true,
                functionParam:value
            }
        })
    }

    return (
        <>
            <div className="shadow-lg m-sm-5 m-0 p-5 rounded-3">
                <h3 className="text-center">{courseData.ChapterTitle}</h3>
                <p className="text-center my-4">{courseData.ChapterDescription}</p>
                <div className="d-flex gap-5 flex-wrap justify-content-center">
                <div className="d-flex flex-column justify-content-center align-items-center shadow-sm rounded-2 px-5 py-2" style={{ width: "15rem", border: "1px groove #EBE6E6" }}>
                    <p className="fs-3" style={{ color: "#22CA39" }}>5</p>
                    <p className="fs-3">Questions</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center shadow-sm rounded-2 px-5 py-2" style={{ width: "15rem", border: "1px outset #EBE6E6" }}>
                    <p className="fs-3" style={{ color: "#22CA39" }}>MCQ</p>
                    <p className="fs-3">Format</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center shadow-sm rounded-2 px-5 py-2" style={{ width: "15rem", border: "1px groove #EBE6E6" }}>
                    <p className="fs-3" style={{ color: "#22CA39" }}>Instant</p>
                    <p className="fs-3">Feedback</p>
                </div>
                </div>
                <p className="fs-4 fw-semibold my-5 text-center text-decoration-underline">Choose Quiz Mode:</p>
                <div className="d-flex gap-4 flex-wrap justify-content-center">
                    <div className="d-flex flex-column justify-content-center align-items-center shadow-sm rounded-2 px-2 py-1" style={{ cursor: "pointer", width: "20rem", border: "1px groove #EBE6E6", backgroundColor: "#22CA39" }} onClick={() => startTest(false)}>
                        <p className="fs-5 fw-demibold">Practice Mode</p>
                        <p className="text-black-50">No time limit, learn at your own pace</p>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center shadow-sm rounded-2 px-2 py-1" style={{cursor:"pointer" , width:"20rem" , border:"1px groove #EBE6E6" , backgroundColor:"#fff"}} onClick={() => startTest(true)}>
                                    <p className="fs-5 fw-demibold">Timed Mode</p>
                                    <p className="text-black-50">3 minutes (3:00)</p>
                    </div>
                </div>
            </div>
        </>
    );

};


export default QuizModes;