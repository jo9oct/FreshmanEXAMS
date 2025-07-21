
import mongoose from "mongoose";

const CourseSchema=new mongoose.Schema({
    CourseCode:{type:String,required:true,unique:true},
    CourseTitle:{type:String,required:true},
    CourseDescription:{type:String,required:true},
    TotalChapter:{type:Number,required:true},
},{timestamps:true});

export const Courses=mongoose.model("course" , CourseSchema);

