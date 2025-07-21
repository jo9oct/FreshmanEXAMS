
import mongoose from "mongoose";

const CourseSchema=new mongoose.Schema({
    BlogTitle:{type:String,required:true},
    BlogSlug:{type:String,required:true},
    BlogContent:{type:String,required:true},
    BlogAuthor:{type:String,required:true},
    BlogTag:{type:String,required:true},
    BlogPublish:{type:Boolean,required:true},
    BlogImg:{type:String,required:true},
    BlogTime:{type:Number,required:true},
},{timestamps:true});

export const Blogs=mongoose.model("blog" , CourseSchema);

