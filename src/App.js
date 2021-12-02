import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Create from "./components/Shop/Create";
import Shopp from "./components/Shop/Shopp";
import { shopActions } from "./store/shop";
import CatFilter from "./components/Shop/CatFilter";
import AreaFilter from "./components/Shop/AreaFilter";
import "./styles.css";

function App() {
  const dispatch = useDispatch();
  const { shop } = useSelector((state) => state.shop);
  const [remove, setRemove] = useState(false);
  const [shopD, setShopD] = useState(shop);

  useEffect(() => {
    setShopD(shop);
    setRemove(false);
  }, [remove]);

  const addShopHandle = (addShop) => {
    dispatch(shopActions.shopStore([addShop]));
    setShopD((prev) => {
      return [addShop, ...prev];
    });
  };

  const removeShopHandle = (id) => {
    console.log(id);
    dispatch(shopActions.remove(id));

    setRemove(true);
  };

  const catFilterHandle = (e) => {
    let tempShop = [...shop];
    const newShop = tempShop.filter((sho) => {
      return sho.category === e;
    });
    setShopD(newShop);
  };
  const areaFilterHandle = (e) => {
    let tempShop = [...shop];
    const newShop = tempShop.filter((sho) => {
      return sho.location === e;
    });
    setShopD(newShop);
  };

  return (
    <div className="container">
      <Create createShop={addShopHandle} />
      <div className="filtered-container">
        <div className="row">
          <div className="col-20">
            <button
              className="btn-all"
              onClick={() => {
                setShopD(shop);
              }}
            >
              All
            </button>
          </div>

          <CatFilter onCategoryChange={catFilterHandle} />
          <AreaFilter onAreaChange={areaFilterHandle} />
        </div>
      </div>

      <Shopp onRemove={removeShopHandle} item={shopD} />
    </div>
  );
}

export default App;
