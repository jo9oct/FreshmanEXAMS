
import express from "express"
import { GetQuestions,CreateQuestions,UpdateQuestions,DeleteQuestions,GetQuestionsById } from "../Controllers/Question.Controller.js";


const router=express();


router.get("/" , GetQuestions);
router.get("/:id" , GetQuestionsById);

router.post("/", CreateQuestions);

router.put("/:id" , UpdateQuestions)
  
router.delete("/:id" , DeleteQuestions)

export default router
