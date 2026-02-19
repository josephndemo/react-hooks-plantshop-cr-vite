import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isInStock, setIsInStock] = useState(
    plant.inStock ?? true
  );

  function handleToggle() {
    setIsInStock((prev) => !prev);
  }

  return (
    <li
      className="card"
      data-testid={isInStock ? "in-stock" : undefined}
    >
      <img src={plant.image} alt={plant.name} />

      {/* 👇 FULL TEXT IN ONE STRING */}
      <h4>
        {plant.name} {isInStock ? "(In Stock)" : "(Sold Out)"}
      </h4>

      <p>${plant.price}</p>

      <button onClick={handleToggle}>
        {isInStock ? "Mark Out of Stock" : "Mark In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
