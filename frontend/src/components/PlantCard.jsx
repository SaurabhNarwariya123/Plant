import React from "react";

const PlantCard = ({ plant }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 lg:p-6 hover:shadow-xl transition">
      <div className="w-full h-56 lg:h-64 overflow-hidden rounded mb-3">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h2 className="text-lg lg:text-xl font-bold mb-2">{plant.name}</h2>
      <p className="text-sm lg:text-base mb-1">Price: ₹{plant.price}</p>
      <p className="text-sm lg:text-base mb-1">Categories: {plant.categories.join(", ")}</p>
      <p className={plant.availability ? "text-green-600" : "text-red-600"}>
        {plant.availability ? "Available" : "Out of Stock"}
      </p>
    </div>
  );
};

export default PlantCard;
