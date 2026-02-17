import React from "react";

function InStock({ plants, onToggleStock }) {
  return (
    <div className="in-stock-section">
      <h2>In Stock Plants</h2>
      <ul className="plant-list">
        {plants.map((plant) => (
          <li key={plant.id} data-testid="in-stock">
            <div className="plant-card">
              <h2>{plant.name}</h2>
              <p>${plant.price}</p>
              <img src={plant.image} alt={plant.name} />
              <button onClick={() => onToggleStock(plant.id)}>
                {plant.inStock ? "Mark Out of Stock" : "Mark In Stock"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InStock;
