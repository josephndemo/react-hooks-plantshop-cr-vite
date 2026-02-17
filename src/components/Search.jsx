// Search.jsx
import React from "react";

function Search({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Type a name to search..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
