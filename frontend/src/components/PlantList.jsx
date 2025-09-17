import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";
import axios from "axios";

const API = import.meta.env.VITE_BACKEND_API;
const PlantList = () => {
  const [plants, setPlants] = useState([]); 
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");


  useEffect(() => {
    const fetchPlants = async () => {
      try {
       const res = await axios.get(`${API}/api/plants`);
        setPlants(res.data);
      } catch (err) {
        console.error("Error fetching plants:", err);
      }
    };
    fetchPlants();
  }, []);
  const filteredPlants = plants?.filter((plant) => {
    const matchesName = plant.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? plant.categories.includes(category) : true;
    return matchesName && matchesCategory;
  }) || [];

  return (
    <div id="plants" className="p-4 lg:p-6">
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by name"
          className="border p-3 rounded flex-1 text-sm lg:text-base"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-3 rounded text-sm lg:text-base"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {[
            "Indoor","Outdoor","Succulent","Home Decor",
            "Flowering","Fragrant","Aquatic","Medicinal",
            "Air Purifying","Religious","Decor"
          ].map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {filteredPlants.map((plant) => (
          <PlantCard key={plant._id || plant.name} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default PlantList;
