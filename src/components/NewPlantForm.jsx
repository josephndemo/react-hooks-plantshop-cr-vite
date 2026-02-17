import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const newPlant = {
      ...formData,
      price: parseFloat(formData.price),
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((data) => {
        onAddPlant(data);
        setFormData({ name: "", image: "", price: "" });
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Plant Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;