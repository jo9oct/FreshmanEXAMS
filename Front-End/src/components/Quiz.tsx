
import React,{useState} from "react";
import QuizTimeCount from "./ui/QuizTimeCount";
import type { allQuestions ,question } from "../types/Question";

interface TestResult {
    question: string;   
}

type ChapterCardsProps = {
  data: allQuestions;
};

const Quiz: React.FC<ChapterCardsProps> = ({data}) => {



    const [mode, setMode] = useState<'pre-test' | 'test' | 'results'>('pre-test');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);    
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [answers, setAnswers] = useState<TestResult[]>([]);
    const [TimeStatus, setTimeStatus] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number | null>(null);
    const [IsRateLimited,setIsRateLimited] = useState(false);
    const [QuestionData,setQuestionData] = useState<allQuestions[]>([]);


    const [selected, setSelected] = useState<string>('');

    return (
        
        <>
            <div>
                <div className="shadow p-4 rounded-3" style={{border:"1px solid #CDC6C6" , margin:"30px 70px"}} >
                    <QuizTimeCount/>
                    <div className="d-flex justify-content-between"><p>Question 3 of 3</p><p>100% Complete</p></div>
                    <div className="" style={{backgroundColor:"#179227" ,height:"5px"}}></div>
                </div>
                <div className="shadow p-4" style={{margin:"30px 70px"}}>
                    <div>
                        <p>{data.Questions[0].question}</p>
                        <div style={{paddingLeft:"15px"}}>
                            <ul className="list-group">
                                <li className="list-group-item mb-3">
                                    <input
                                    className="form-check-input me-1"
                                    type="radio"
                                    style={{ accentColor: '#179227' }}
                                    name="listGroupRadio"
                                    value="firstRadio"
                                    id="firstRadio"
                                    checked={selected === 'firstRadio'}
                                    onChange={(e) => setSelected(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="firstRadio">
                                    {data.Questions[0].options[0]}
                                    </label>
                                </li>

                                <li className="list-group-item mb-3">
                                    <input
                                    className="form-check-input me-1"
                                    type="radio"
                                    style={{ accentColor: '#179227' }}
                                    name="listGroupRadio"
                                    value="secondRadio"
                                    id="secondRadio"
                                    checked={selected === 'secondRadio'}
                                    onChange={(e) => setSelected(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="secondRadio">
                                    {data.Questions[0].options[1]}
                                    </label>
                                </li>

                                <li className="list-group-item mb-3">
                                    <input
                                    className="form-check-input me-1"
                                    type="radio"
                                    style={{ accentColor: '#179227' }}
                                    name="listGroupRadio"
                                    value="thirdRadio"
                                    id="thirdRadio"
                                    checked={selected === 'thirdRadio'}
                                    onChange={(e) => setSelected(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="thirdRadio">
                                    {data.Questions[0].options[2]}
                                    </label>
                                </li>

                                <li className="list-group-item mb-3">
                                    <input
                                    className="form-check-input me-1"
                                    type="radio"
                                    style={{ accentColor: '#179227' }}
                                    name="listGroupRadio"
                                    value="fourthRadio"
                                    id="fourthRadio"
                                    checked={selected === 'fourthRadio'}
                                    onChange={(e) => setSelected(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="fourthRadio">
                                    {data.Questions[0].options[3]}
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-around">
                            <p className="px-4 py-2 rounded-2" style={{backgroundColor:"#EBE6E6"}}>Previous</p>
                            <p className="px-4 py-2 rounded-2" style={{backgroundColor:"#22CA39"}}>Next</p>
                        </div>
                    </div>
                </div>
                <div className="shadow p-4" style={{margin:"20px 70px 50px"}}>
                    <p>Question Navigator</p>
                    <div className="d-flex gap-3">
                        <button className="rounded-1 " style={{width:"35px", height:"35px",backgroundColor:"#22CA39",color:"white",borderColor:"#22CA39"}}>1</button>
                        <button className="rounded-1 " style={{width:"35px", height:"35px",border:"1px solid #CDC6C6"}}>2</button>
                        <button className="rounded-1 " style={{width:"35px", height:"35px",border:"1px solid #CDC6C6"}}>3</button>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Quiz;
