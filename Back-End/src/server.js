
import express, { json } from "express"
import dotenv from "dotenv"
import cors from "cors"
import {connectDB} from "./config/db.js"
import CourseRoutes from "./routes/Course.route.js"
import ChapterRoutes from "./routes/Chapter.route.js"
import  rateLimiter from "./Middleware/rateLimiter.js"

dotenv.config()

const app=express();
await connectDB();              //db connected
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
const PORT = process.env.PORT || 5000;
app.use(rateLimiter)     //TimeLimit Middleware


app.use(express.json());
app.use("/api/course",CourseRoutes);
app.use("/api/chapter",ChapterRoutes);


app.listen(PORT , () =>{
    console.log(`server run on http://localhost:${PORT}`);
})
