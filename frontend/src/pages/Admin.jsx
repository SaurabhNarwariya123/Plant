import React, { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_BACKEND_API;

const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [availability, setAvailability] = useState(true);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !categories || !image) {
      setMessage("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("categories", categories);
    formData.append("availability", availability);
    formData.append("image", image);

    try {
      const token = localStorage.getItem("adminToken");

      const res = await axios.post(`${API}/api/plants`, formData,
         {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("Plant added successfully!");
      setName("");
      setPrice("");
      setCategories("");
      setAvailability(true);
      setImage(null);
    } catch (err) {
      console.error(err);
      setMessage("Error adding plant.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Admin Panel - Add New Plant</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Plant Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Categories (comma separated)"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value === "true")}
          className="border px-3 py-2 rounded"
        >
          <option value="true">Available</option>
          <option value="false">Out of Stock</option>
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Plant
        </button>
      </form>
    </div>
  );
};

export default Admin;


