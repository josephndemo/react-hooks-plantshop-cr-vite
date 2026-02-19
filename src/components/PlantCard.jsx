// src/components/PlantCard.jsx
import React from "react";

function PlantCard({ plant, onToggleStock }) {
  return (
    <li className="card" data-testid={plant.inStock ? "in-stock" : undefined}>
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4> {/* only the name for exact text match */}
      <p>${plant.price}</p>
      <button onClick={() => onToggleStock(plant.id)}>
        {plant.inStock ? "Mark Out of Stock" : "Mark In Stock"}
      </button>
      {plant.inStock && <span>(In Stock)</span>} {/* separate span */}
    </li>
  );
}

export default PlantCard;
