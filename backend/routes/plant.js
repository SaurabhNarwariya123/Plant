import express from "express";
import parser from "../middleware/multer.js";       
import { getAllPlants, addNewPlant } from "../controller/Controller.js";

const router = express.Router();
router.get("/", getAllPlants);
router.post("/", parser.single("image"), addNewPlant);

export default router;
