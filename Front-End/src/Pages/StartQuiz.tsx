
import React, { useState, useEffect } from "react";
import type { allQuestions, TestResult } from "../types/Question.ts";
import api from "../lib/axios.tsx";
import toast from "react-hot-toast";
import axios from "axios";
import Loader1 from "../components/ui/Loader1.tsx";
import RateLimitWarning from "../components/ui/TimeLimit.tsx";
import { useLocation, useNavigate } from "react-router-dom";

const StartQuiz: React.FC = () => {

    const navigate = useNavigate();

    const { state } = useLocation();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [answers, setAnswers] = useState<TestResult[]>([]);
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [questionData, setQuestionData] = useState<allQuestions[]>([]);
    const [loading, setLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState(0);
    const [Status,setStatus] =useState<boolean>(true);
    const [EndIndex, setEndIndex] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get<allQuestions[]>("/question");
                setQuestionData(res.data);
                setIsRateLimited(false);
    
                // Start the test immediately after data fetch
                if (state?.callFunction && typeof state.functionParam === "boolean") {
                    const value = Number(localStorage.getItem("myKey")) || 0;
                    const incomingStatus = state.functionParam;
    
                    if (incomingStatus && res.data[0]) {
                        const question = res.data[0].Questions[value];
                        if (question) {
                            const current = Number(question.allowedTime) * 5;
                            setTimeLeft(current);
                        }
                    } else {
                        setTimeLeft(0);
                    }
                }
            } catch (error) {
                if (axios.isAxiosError(error) && error.response?.status === 429) {
                    setIsRateLimited(true);
                } else {
                    toast.error("Failed to load questions");
                }
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    

    useEffect(() => {
        if (state?.callFunction && typeof state.functionParam === "boolean") {
            startTest(state.functionParam);
        }
    }, [state]);

    const startTest = (status : boolean) => {
        const value = Number(localStorage.getItem("myKey")) || 0;
        setCurrentQuestionIndex(value);    
        setSelectedAnswer(null);
        setAnswers([]);
        setEndIndex(0);
        setStatus(status);
        if (!status) {
            setTimeLeft(0); 
        }
    };

    useEffect(() => {
        let interval: number;
        
        if (timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prev => {
                if (prev <= 1) {
                    navigate("/Course/Result", {
                        state: {
                          answers: answers,
                          questionData: questionData,
                        },
                    });
                    return 0;
                }
                return prev - 1;
                });
            }, 1000);
            }
            
            return () => {
            if (interval) clearInterval(interval);
            };
        }, [timeLeft]);

        const formatTime = (seconds: number): string => {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        }

        useEffect(() => {
            const savedAnswer = answers[currentQuestionIndex];
            setSelectedAnswer(savedAnswer ? savedAnswer.selectedAnswer : null);
        }, [currentQuestionIndex, answers]);


    useEffect(() => {
        const savedAnswer = answers.find((a) => 
            questionData[0]?.Questions[currentQuestionIndex]?.id === a.questionId
        );
        setSelectedAnswer(savedAnswer ? savedAnswer.selectedAnswer : null);
    }, [currentQuestionIndex, answers, questionData]);
    

    const handleNextQuestion = () => {
        const question = questionData[0].Questions[currentQuestionIndex];
        const totalQuestions = questionData[0].Questions.length;
    
        if (selectedAnswer !== null) {
            const isCorrect = question.options[selectedAnswer] === question.correctAnswer;
    
            const newAnswer = { questionId: question.id, selectedAnswer, isCorrect };

            const updatedAnswers = (() => {
                const existingIndex = answers.findIndex((a) => a.questionId === question.id);
                if (existingIndex >= 0) {
                    const clone = [...answers];
                    clone[existingIndex] = newAnswer;
                    return clone;
                } else {
                    return [...answers, newAnswer];
                }
            })();
    
            setAnswers(updatedAnswers);
            setEndIndex((prev) => prev + 1);

    
            if (EndIndex === 4) {
                navigate("/Course/Result", {
                    state: {
                        answers: updatedAnswers, 
                        questionData: questionData,
                    },
                });
            }else if(currentQuestionIndex === totalQuestions - 1){
                const nextIndex = 0;
                setCurrentQuestionIndex(nextIndex);
                localStorage.setItem("myKey", String(nextIndex));
            } else {
                const nextIndex = currentQuestionIndex + 1;
                setCurrentQuestionIndex(nextIndex);
                localStorage.setItem("myKey", String(nextIndex));
            }
    
            setSelectedAnswer(null);
        }
    };


    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            const prevIndex = currentQuestionIndex - 1;
            setEndIndex((prev) => Math.max(prev - 1, 0));
            setCurrentQuestionIndex(prevIndex);
            localStorage.setItem("myKey", String(prevIndex));
        }
    };
     
    if (!questionData || !questionData[0]?.Questions?.length) {
        return <Loader1 />;
    }
    const Q = questionData[0].Questions[currentQuestionIndex];
    const progress = Math.round(((EndIndex + 1) / 5) * 100);

    return (
        <>
            {loading && <Loader1 />}
            {questionData.length > 0 && !isRateLimited && (
            <>
                <div className="shadow p-4 rounded-3" style={{ border: "1px solid #CDC6C6", margin: "30px 70px" }}>
                        {Status && <div className="d-flex justify-content-center align-items-center gap-3" >
                            <img src="/public/clock.png" alt="icon" width={"25px"} height={"25px"} />
                            <p className="fw-bold fs-4 " style={{color:"#179227" , marginTop:"15px"}}>{formatTime(timeLeft)}</p>
                        </div>}
                <div className="d-flex justify-content-between">
                    <p>Question {EndIndex + 1} of {5}</p>
                    <p>{progress}% Complete</p>
                </div>
                <div style={{ backgroundColor: "#EBE6E6", height: "5px", width: `100%` }}>
                    <div style={{ backgroundColor: "#179227", height: "5px", width: `${progress}%` }}></div>
                </div>
                </div>

                <div className="shadow p-4 " style={{ margin: "30px 70px" }}>
                <p>{Q.question}</p>
                <ul className="list-group">
                    {Q.options.map((option, index) => (
                    <li key={index} className="list-group-item mb-3">
                        <input
                        className="form-check-input me-1"
                        type="radio"
                        style={{ accentColor: "#179227" }}
                        name="listGroupRadio"
                        value={index}
                        id={`optionRadio${index}`}
                        checked={selectedAnswer === index}
                        onChange={() => setSelectedAnswer(index)}
                        />
                        <label className="form-check-label" htmlFor={`optionRadio${index}`}>{option}</label>
                    </li>
                    ))}
                </ul>
                <div className="d-flex justify-content-around">
                    <button className="px-4 py-2 rounded-2 border-0" style={{ backgroundColor: "#EBE6E6" }} onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                    Previous
                    </button>
                    <button className="px-4 py-2 rounded-2 border-0" style={{ backgroundColor: "#1fb633b4" }} onClick={handleNextQuestion} disabled={selectedAnswer === null}>
                    {EndIndex === 4 ? "Submit" : "Next"}
                    </button>
                </div>
                </div>
            </>
        )}
        {isRateLimited && <RateLimitWarning />}
    </>
    );
}


export default StartQuiz;
 
