import Plant from "../model/Plant.js";

export const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find().sort({ createdAt: -1 });
    res.json(plants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addNewPlant = async (req, res) => {
  try {
    const { name, price, categories, availability } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image file is required." });
    }

    const imageUrl = req.file.path;

    const categoryArray =
      typeof categories === "string"
        ? categories.split(",").map((cat) => cat.trim())
        : categories;

    const newPlant = new Plant({
      name,
      price,
      categories: categoryArray,
      availability: availability === "true" || availability === true,
      image: imageUrl,
    });

    await newPlant.save();
    res.status(201).json(newPlant);
  } catch (err) {
    console.error("Add Plant Error:", err);
    res.status(400).json({ error: err.message });
  }
};
