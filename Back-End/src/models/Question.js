
import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  CourseCode: { type: String, required: true },
  CourseChapter: { type: Number, required: true },
  Questions: [
    {
      id: { type: Number, required: true , unique: true },
      question: { type: String, required: true },
      options: { type: [String], required: true },
      correctAnswer: { type: String, required: true },
      explanation: { type: String, required: true },
      difficulty: { type: String, required: true ,enum: ['easy', 'medium', 'hard'] },
      allowedTime: { type: Number, required: true },
    }
  ]
}, { timestamps: true });

export const Questions = mongoose.model("Question", QuestionSchema);
