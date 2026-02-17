import React from "react";

const PlantCard = ({ plant, onToggleStock }) => {
  return (
    <div className="plant-card">
      <h2>{plant.name}</h2>
      <p>${plant.price}</p>
      {plant.image && <img src={plant.image} alt={plant.name} />}
      <button onClick={() => onToggleStock(plant.id)}>
        {plant.inStock ? "Mark Out of Stock" : "Mark In Stock"}
      </button>
    </div>
  );
};

export default PlantCard;
