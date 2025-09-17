import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../db/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "plants",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const parser = multer({ storage });

export default parser;
