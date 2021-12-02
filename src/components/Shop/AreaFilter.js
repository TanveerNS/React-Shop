import React, { useState } from "react";
import { useSelector } from "react-redux";

const CatFilter = ({ onAreaChange }) => {
  const [are, setAre] = useState("");
  const { area } = useSelector((state) => state.shop);

  const areaChangeHandler = (e) => {
    console.log(e.target.value);
    setAre(e.target.value);
    onAreaChange(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="col-40">
      <label>Filter by Area</label>
      <select selected={are} onChange={areaChangeHandler}>
        <option value="" disabled selected>
          Select Area
        </option>
        {area.map((ar, i) => {
          return (
            <option key={i} value={ar}>
              {ar}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CatFilter;
