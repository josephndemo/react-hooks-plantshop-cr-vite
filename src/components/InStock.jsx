import React from "react";
import PlantCard from "./PlantCard";

function InStock({ plants, onToggleStock }) {
  const inStockPlants = plants.filter((plant) => plant.inStock);

  return (
    <div className="in-stock-section">
      <h2>In Stock Plants</h2>
      <ul className="plant-list">
        {inStockPlants.map((plant) => (
          <li key={plant.id}>
            <PlantCard plant={plant} onToggleStock={onToggleStock} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InStock;
