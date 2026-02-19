import { useState } from "react";

function App() {
  // Initial plants
  const initialPlants = [
    { id: 1, name: "Aloe Vera", inStock: true },
    { id: 2, name: "Snake Plant", inStock: false },
    { id: 3, name: "Monstera", inStock: true },
  ];

  const [plants, setPlants] = useState(initialPlants);
  const [search, setSearch] = useState("");
  const [newPlantName, setNewPlantName] = useState("");

  // Filtered plants based on search
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddPlant = (e) => {
    e.preventDefault();
    if (!newPlantName.trim()) return;

    const newPlant = {
      id: plants.length + 1,
      name: newPlantName.trim(),
      inStock: true, // default in stock
    };

    setPlants([...plants, newPlant]);
    setNewPlantName("");
  };

  return (
    <div className="app">
      <header>
        <h1>
          Plantsy <span className="logo" role="img">🌱</span>
        </h1>
      </header>

      <main>
        <h1>All Plants</h1>

        {/* Search Bar */}
        <div className="searchbar">
          <label htmlFor="search">Search Plants:</label>
          <input
            id="search"
            placeholder="Search plants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Plants List */}
        <ul className="cards" data-testid="plants-list">
          {filteredPlants.map((plant) => (
            <li key={plant.id} data-testid={plant.inStock ? "in-stock" : undefined}>
              {plant.name}
            </li>
          ))}
        </ul>

        {/* Create Plant Form */}
        <form onSubmit={handleAddPlant}>
          <label htmlFor="plantName">Plant Name</label>
          <input
            id="plantName"
            name="plantName"
            value={newPlantName}
            onChange={(e) => setNewPlantName(e.target.value)}
          />
          <button type="submit">Add Plant</button>
        </form>
      </main>
    </div>
  );
}

export default App;
