import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import plantRoutes from "./routes/plant.js";
import { connectDB } from "./db/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); 
app.use("/api/plants", plantRoutes);


app.get("/", (req, res) => {
  res.send("Plant Catalog Backend is running!");
});

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
