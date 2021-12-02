import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { shopActions } from "../../store/shop";
import "../UI/Cards.css";
import image from "../../assets/grocer.jpg";
const ShopList = ({ id, name, location, category, onRemove }) => {
  const dispatch = useDispatch();
  const { shop } = useSelector((state) => state.shop);

  const removeHandle = (id) => {
    onRemove(id);
  };
  return (
    <div className="card-grid-space">
      <div className="card">
        <div>
          <img className="img-title" src={image} />
        </div>
        <div className="des-info">
          <h4>
            <center>{name}</center>
          </h4>
          <p>
            <b>Area:</b> {location} <br />
            <b>Category:</b> {category}
          </p>
          <div className="date">Open</div>
          <div className="remove" onClick={() => removeHandle(id)}>
            X
          </div>
          <div className="tags">
            <div className="tag">
              <a href="">Go to</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopList;
