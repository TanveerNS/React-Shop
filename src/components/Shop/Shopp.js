import React, { useState } from "react";
import ShopList from "./ShopList";

const Shopp = ({ item, onRemove }) => {
  return (
    <>
      <section className="cards-wrapper">
        {item.map((shp) => {
          return <ShopList onRemove={onRemove} key={shp.id} {...shp} />;
        })}
      </section>
    </>
  );
};

export default Shopp;
