

import {Blogs} from "../models/Blog.js"
import mongoose from "mongoose";


export const GetBlogs = async (req,res) => {
    
    try{
        const Blog=await Blogs.find({BlogPublish: true}).sort({createdAt:-1})
        res.status(200).json(Blog)
    }catch(error){
        console.error("Error in fetching Blog" , error.message)
        res.status(404).json({
            success: false,
            message: "Blog Not Found",
        });
    }

}

export const GetBlogsById = async (req,res) => {
    const id=req.params.id
    try{
        const Blog=await Blogs.findById(id)
        res.status(200).json(Blog)
    }catch(error){
        console.error("Error in fetching Blog" , error.message)
        res.status(404).json({
            success: false,
            message: "Blog Not Found",
        });
    }

}

export const CreateBlogs= async (req, res) => {
    const BlogData = req.body;
  
    if (!BlogData.BlogTitle || !BlogData.BlogSlug || !BlogData.BlogContent || !BlogData.BlogDescription || !BlogData.BlogTag || !BlogData.BlogPublish === undefined || !BlogData.BlogImg || !BlogData.BlogTime) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    try {
      
      const newBlog = new Blogs(BlogData);
      await newBlog.save();
  
      res.status(201).json({
        success: true,
        message: newBlog,
      });

    } catch (error) {
      console.error("Error in creating Blog:", error.message);
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  }

export const UpdateBlogs= async (req,res) =>{
    const id=req.params.id;
    const Blog=req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false,message:"Invalid Blog ID"})
    }

    try{
        const updateData=await Blogs.findByIdAndUpdate(id,Blog,{new:true})
        await updateData.save();
        res.status(200).json({
            success:true,
            data:updateData
        })
    }catch(error){
        console.error("Error in creating Blog:", error.message);
        res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }

}

export const DeleteBlogs= async (req,res) => {
    const id=req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
      res.status(404).json({success:false,message:"Invalid Blog ID"})
    }

    try{
        await Blogs.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Blog Deleted",
          });
    }
    catch(error){
        console.error("Error in deleting Blog" , error.message)
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }

}