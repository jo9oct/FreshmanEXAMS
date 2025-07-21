
import {Chapters} from "../models/Chapter.js"
import mongoose from "mongoose";


export const GetChapters = async (req,res) => {
    
    try{
        const Chapter=await Chapters.find({})

        const sortedChapter = Chapter.map(course => {
            course.Chapters.sort((a, b) => a.ChapterNumber - b.ChapterNumber);
            return course;
        });

        res.status(200).json(sortedChapter)
    }catch(error){
        console.error("Error in fetching Chapter" , error.message)
        res.status(404).json({
            success: false,
            message: "Chapter Not Found",
        });
    }

}

export const GetChaptersById = async (req,res) => {
    const id=req.params.id
    
    try{

        const allCourses = await Chapters.find({});

        for (const course of allCourses) {
            const chapter = course.Chapters.find(ch => ch._id.toString() === id);
            if (chapter) {
                return res.status(200).json(chapter);
            }
        }

        // If not found
        res.status(404).json({
        success: false,
        message: "Chapter Not Found",
        });

    }catch(error){
        console.error("Error in fetching Chapter" , error.message)
        res.status(404).json({
            success: false,
            message: "Chapter Not Found",
        });
    }

}

export const CreateChapters = async (req, res) => {
    const chapterData = req.body;
  
    if (
      !chapterData.CourseCode ||
      !Array.isArray(chapterData.Chapters) ||
      chapterData.Chapters.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "CourseCode and at least one Chapter are required",
      });
    }
  
    const invalidChapter = chapterData.Chapters.find(
      (ch) =>
        !ch.ChapterNumber || !ch.ChapterTitle || !ch.ChapterDescription
    );
  
    if (invalidChapter) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide all required fields",
      });
    }

  
    try {

      let existingCourse = await Chapters.findOne({ CourseCode: chapterData.CourseCode });
  
      if (existingCourse) {
        
        const existingNumbers = existingCourse.Chapters.map(ch => ch.ChapterNumber);
        const newNumbers = chapterData.Chapters.map(ch => ch.ChapterNumber);

        const duplicateNumbers = newNumbers.filter(num => existingNumbers.includes(num));

        if (duplicateNumbers.length > 0) {
            return res.status(400).json({
            success: false,
            message: `Course chapter already exists`,
            });
        }

        existingCourse.Chapters.push(...chapterData.Chapters);
        await existingCourse.save();
  
        return res.status(200).json({
          success: true,
          message: "Chapters added to existing course",
          data: existingCourse,
        });
      } else {
        const newCourse = new Chapters(chapterData);
        await newCourse.save();
  
        return res.status(201).json({
          success: true,
          message: "New course with chapters created",
          data: newCourse,
        });
      }
    } catch (error) {
      console.error("Error in creating Chapter:", error.message);
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
}
  
export const UpdateChapters = async (req, res) => {
  const chapterId = req.params.id;
  const updatedChapter = req.body;

  if (!mongoose.Types.ObjectId.isValid(chapterId)) {
    return res.status(400).json({ success: false, message: "Invalid Chapter ID" });
  }

  try {
    const result = await Chapters.findOneAndUpdate(
      { "Chapters._id": chapterId },
      {
        $set: {
          "Chapters.$.ChapterNumber": updatedChapter.ChapterNumber,
          "Chapters.$.ChapterTitle": updatedChapter.ChapterTitle,
          "Chapters.$.ChapterDescription": updatedChapter.ChapterDescription,
        },
      },
      { new: true }
    );

    if (!result) {
      return res.status(404).json({ success: false, message: "Chapter not found" });
    }

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error("Error in updating Chapter:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


export const DeleteChapters = async (req, res) => {
  const chapterId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(chapterId)) {
    return res.status(400).json({ success: false, message: "Invalid Chapter ID" });
  }

  try {
    const result = await Chapters.findOneAndUpdate(
      { "Chapters._id": chapterId },
      { $pull: { Chapters: { _id: chapterId } } },
      { new: true }
    );

    if (!result) {
      return res.status(404).json({ success: false, message: "Chapter not found" });
    }

    res.status(200).json({ success: true, message: "Chapter deleted", data: result });
  } catch (error) {
    console.error("Error deleting chapter:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
}
