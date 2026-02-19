// src/components/PlantPage.jsx
import React, { useState } from "react";
import PlantCard from "./PlantCard";

function PlantPage({ plants = [], onToggleStock }) {
  const [searchTerm, setSearchTerm] = useState("");

  const displayedPlants = plants.filter(
    (plant) =>
      plant.name &&
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <h1>All Plants</h1>
      <div className="searchbar">
        <label htmlFor="search">Search Plants:</label>
        <input
          id="search"
          placeholder="Search plants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul className="cards" data-testid="plants-list">
        {displayedPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} onToggleStock={onToggleStock} />
        ))}
      </ul>
    </main>
  );
}

export default PlantPage;
