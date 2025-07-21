

import express from "express"
import { GetChapters,CreateChapters,UpdateChapters,DeleteChapters,GetChaptersById } from "../Controllers/Chapter.Controller.js";


const router=express();


router.get("/" , GetChapters);
router.get("/:id" , GetChaptersById);

router.post("/", CreateChapters);

router.put("/:id" , UpdateChapters)
  
router.delete("/:id", DeleteChapters)

export default router