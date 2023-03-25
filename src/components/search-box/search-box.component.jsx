import React from "react";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className="row">
    <div className="col-4 offset-4">
      <input
        type="search"
        className="form-control mt-5"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  </div>
);
