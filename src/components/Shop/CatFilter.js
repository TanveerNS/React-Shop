import React, { useState } from "react";
import { useSelector } from "react-redux";

const CatFilter = ({ onCategoryChange }) => {
  const [categ, setCateg] = useState("");
  const { category } = useSelector((state) => state.shop);

  const catChangeHandler = (e) => {
    setCateg(e.target.value);
    onCategoryChange(e.target.value);
  };
  return (
    <div className="col-40">
      <label>Filter by Category</label>
      <select selected={categ} onChange={catChangeHandler}>
        <option value="" disabled selected>
          Select Category
        </option>
        {category.map((cat, i) => {
          return (
            <option key={i} value={cat}>
              {cat}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CatFilter;
