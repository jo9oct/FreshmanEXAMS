
import {Courses} from "../models/Course.js"
import mongoose from "mongoose";


export const GetCourses = async (req,res) => {
    
    try{
        const course=await Courses.find({}).sort({createdAt:-1})
        res.status(200).json(course)
    }catch(error){
        console.error("Error in fetching course" , error.message)
        res.status(404).json({
            success: false,
            message: "Course Not Found",
        });
    }

}

export const GetCoursesById = async (req,res) => {
    const id=req.params.id
    try{
        const course=await Courses.findById(id)
        res.status(200).json(course)
    }catch(error){
        console.error("Error in fetching course" , error.message)
        res.status(404).json({
            success: false,
            message: "Course Not Found",
        });
    }

}

export const CreateCourses= async (req, res) => {
    const courseData = req.body;
  
    if (!courseData.CourseCode || !courseData.CourseTitle || !courseData.CourseDescription || !courseData.TotalChapter) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }
  
    try {

      const existingCourse = await Courses.findOne({ CourseCode: courseData.CourseCode });
  
      if (existingCourse) {
        return res.status(409).json({
          success: false,
          message: "Course Code already exists",
        });
      }
  
      const newCourse = new Courses(courseData);
      await newCourse.save();
  
      res.status(201).json({
        success: true,
        message: newCourse,
      });

    } catch (error) {
      console.error("Error in creating course:", error.message);
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  }

export const UpdateCourses= async (req,res) =>{
    const id=req.params.id;
    const course=req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false,message:"Invalid Course ID"})
    }

    try{
        const updateData=await Courses.findByIdAndUpdate(id,course,{new:true})
        await updateData.save();
        res.status(200).json({
            success:true,
            data:updateData
        })
    }catch(error){
        console.error("Error in creating course:", error.message);
        res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }

}

export const DeleteCourses= async (req,res) => {
    const id=req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
      res.status(404).json({success:false,message:"Invalid Course ID"})
    }

    try{
        await Courses.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Course Deleted",
          });
    }
    catch(error){
        console.error("Error in deleting course" , error.message)
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }

}