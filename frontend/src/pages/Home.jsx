import React from "react";
import PlantList from "../components/PlantList";

const Home = () => {
  return (
    <div>
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Plants</h2>
        <PlantList />
      </section>

        <section id="about" className="bg-green-100 p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">About Mini Plant Store</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Welcome to our Mini Plant Store! Explore a variety of indoor and outdoor plants.
          Search by name or filter by category to find your perfect plant. All plants show
          price, categories, and availability.
        </p>
      </section>
    </div>
  );
};

export default Home;
