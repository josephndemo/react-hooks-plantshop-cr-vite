// src/components/PlantList.jsx
import React from "react";
import PlantCard from "./PlantCard"; // <--- NO CURLY BRACES HERE

function PlantList({ plants }) {
  return (
    <ul className="cards" data-testid="plants-list">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;