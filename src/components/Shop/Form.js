import { useSelector, useDispatch } from "react-redux";

import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const Form = ({ onSaveExpenseData }) => {
  const { area, category } = useSelector((state) => state.shop);

  const [shopName, setShopName] = useState("");
  const [shopArea, setShopArea] = useState("");
  const [shopCategory, setShopCategory] = useState("");
  const [error, setError] = useState();

  const shopNameHandle = (e) => setShopName(e.target.value);
  const shopAreaHandle = (e) => setShopArea(e.target.value);
  const shopCategoryHandle = (e) => setShopCategory(e.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    if (shopName.trim().length === 0 || shopName === null) {
      setError({
        title: "Invalid Shop Name",
        message: "Please enter a valid name (non-empty values)."
      });
      return;
    } else if (shopName.trim().length > 0) {
      let stringContainsNumber = (_string) => {
        return /\d/.test(_string);
      };
      if (stringContainsNumber(shopName)) {
        setError({
          title: "Invalid Shop Name",
          message: "Please enter only alphabet (not number)."
        });
        return;
      }
    } else if (shopArea.trim().length === 0 || shopArea === null) {
      setError({
        title: "Invalid Shop Area",
        message: "Please select a area "
      });
      return;
    } else if (shopCategory.trim().length === 0 || shopCategory === null) {
      setError({
        title: "Invalid Shop Category",
        message: "Please select a category "
      });
      return;
    }
    const data = {
      name: shopName,
      location: shopArea,
      category: shopCategory
    };
    onSaveExpenseData(data);
    setShopName("");
    setShopArea("");
    setShopCategory("");
  };

  const errorHandler = () => setError(null);

  return (
    <div className="container-form">
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form className="shop-form" onSubmit={submitHandler}>
        <h1 className="title">Add Shop</h1>
        <div className="row">
          <div className="col-25">
            <label className="" htmlFor="name">
              Shop Name:
            </label>
          </div>
          <div className="col-75">
            <input
              className=""
              type="text"
              name="shopname"
              value={shopName}
              onChange={shopNameHandle}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="name">Shop Area:</label>
          </div>
          <div className="col-75">
            <select value={shopArea} onChange={shopAreaHandle}>
              <option value="" disabled>
                Select Location
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
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="name">Shop Category:</label>
          </div>
          <div className="col-75">
            <select value={shopCategory} onChange={shopCategoryHandle}>
              <option value="" disabled>
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
        </div>
        <div className="row">
          <div className="col-btn">
            <button className="btn-submit" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
