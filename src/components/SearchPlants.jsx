import React, { useState } from "react";

function SearchPlants({ plants }) {
  const [query, setQuery] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search plants..."   // matches the test
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className="plant-list">
        {filteredPlants.map((plant) => (
          <li key={plant.id}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPlants;
