

import { Questions } from "../models/Question.js";
import mongoose from "mongoose";


export const GetQuestions = async (req,res) => {
    
    try{
        const Question=await Questions.find({})

        const sortedQuestion = Question.map(course => {
            course.Questions.sort((a, b) => a.QuestionNumber - b.QuestionNumber);
            return course;
        });

        res.status(200).json(sortedQuestion)
    }catch(error){
        console.error("Error in fetching Question" , error.message)
        res.status(404).json({
            success: false,
            message: "Question Not Found",
        });
    }

}

export const GetQuestionsById = async (req,res) => {
    const id=req.params.id
    
    try{

        const allCourses = await Questions.find({});

        for (const course of allCourses) {
            const Question = course.Questions.find(ch => ch._id.toString() === id);
            if (Question) {
                return res.status(200).json(Question);
            }
        }

        // If not found
        res.status(404).json({
        success: false,
        message: "Question Not Found",
        });

    }catch(error){
        console.error("Error in fetching Question" , error.message)
        res.status(404).json({
            success: false,
            message: "Question Not Found",
        });
    }

}

export const CreateQuestions = async (req, res) => {
    const QuestionData = req.body;
  
    if (
      !QuestionData.CourseCode ||
      !Number.isInteger(QuestionData.CourseChapter) ||
      !Array.isArray(QuestionData.Questions) ||
      QuestionData.Questions.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "CourseCode, CourseChapter and at least one Question are required",
      });
    }
  
    // Validate each question
    const invalidQuestion = QuestionData.Questions.find(ch => {
      return (
        ch.id === undefined || ch.id === null ||
        !ch.question ||
        !Array.isArray(ch.options) || ch.options.length === 0 ||
        !ch.correctAnswer||
        !ch.explanation ||
        !ch.difficulty ||
        ch.allowedTime === undefined || ch.allowedTime === null
      );
    });
  
    if (invalidQuestion) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields in each question",
      });
    }

    for (const ch of QuestionData.Questions) {
        const existingCourse = await Questions.findOne({ "Questions.id": ch.id });
      
        if (existingCourse) {
          return res.status(409).json({
            success: false,
            message: `Question with ID ${ch.id} already exists`,
          });
        }
    }

    try {
      let existingCourse = await Questions.findOne({ CourseCode: QuestionData.CourseCode });
  
      if (existingCourse) {
        const chapterExists = existingCourse.CourseChapter === QuestionData.CourseChapter;
  
        if (chapterExists) {
          existingCourse.Questions.push(...QuestionData.Questions);
          await existingCourse.save();
  
          return res.status(200).json({
            success: true,
            message: "Questions added to existing course chapter",
            data: existingCourse,
          });
        } else {
          const newChapterDoc = new Questions(QuestionData);
          await newChapterDoc.save();
  
          return res.status(201).json({
            success: true,
            message: "Added new chapter to existing course code",
            data: newChapterDoc,
          });
        }
      } else {
        const newCourse = new Questions(QuestionData);
        await newCourse.save();
  
        return res.status(201).json({
          success: true,
          message: "New course and questions created",
          data: newCourse,
        });
      }
    } catch (error) {
      console.error("Error in creating Question:", error.message);
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
};
  
  
export const UpdateQuestions = async (req, res) => {
  const QuestionId = req.params.id;
  const updatedQuestion = req.body;

  if (!mongoose.Types.ObjectId.isValid(QuestionId)) {
    return res.status(400).json({ success: false, message: "Invalid Question ID" });
  }

  try {
    const result = await Questions.findOneAndUpdate(
      { "Questions._id": QuestionId },
      {
        $set: {
          "Questions.$.id": updatedQuestion.id,
          "Questions.$.question": updatedQuestion.question,
          "Questions.$.options": updatedQuestion.options,
          "Questions.$.correctAnswer": updatedQuestion.correctAnswer,
          "Questions.$.explanation": updatedQuestion.explanation,
          "Questions.$.difficulty": updatedQuestion.difficulty,
          "Questions.$.allowedTime": updatedQuestion.allowedTime,
        },
      },
      { new: true }
    );

    if (!result) {
      return res.status(404).json({ success: false, message: "Question not found" });
    }

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error("Error in updating Question:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const DeleteQuestions = async (req, res) => {
  const QuestionId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(QuestionId)) {
    return res.status(400).json({ success: false, message: "Invalid Question ID" });
  }

  try {
    const result = await Questions.findOneAndUpdate(
      { "Questions._id": QuestionId },
      { $pull: { Questions: { _id: QuestionId } } },
      { new: true }
    );

    if (!result) {
      return res.status(404).json({ success: false, message: "Question not found" });
    }

    res.status(200).json({ success: true, message: "Question deleted", data: result });
  } catch (error) {
    console.error("Error deleting Question:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
}
