import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onToggleStock }) {
  return (
    <ul className="plant-list">
      {plants.map((plant) => (
        <li key={plant.id}>
          <PlantCard plant={plant} onToggleStock={onToggleStock} />
        </li>
      ))}
    </ul>
  );
}

export default PlantList;
