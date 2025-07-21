
import express from "express"
import { GetCourses,CreateCourses,UpdateCourses,DeleteCourses,GetCoursesById } from "../Controllers/Course.Controller.js";


const router=express();


router.get("/" , GetCourses);
router.get("/:id" , GetCoursesById);

router.post("/", CreateCourses);

router.put("/:id" , UpdateCourses)
  
router.delete("/:id" , DeleteCourses)

export default router