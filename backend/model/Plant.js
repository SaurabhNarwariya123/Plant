// models/Plant.js
import mongoose from "mongoose";

const PlantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
         },
  price: {
    type: Number,
    required: true
  },
  categories: {
    type: [String],
    required: true
  },
  availability: {
    type: Boolean,
    default: true
  },
  image: {
    type: String, // Cloudinary URL
    required: true
  },
}, { timestamps: true }); // createdAt, updatedAt

export default mongoose.model("Plant", PlantSchema);
