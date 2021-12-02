import { configureStore } from "@reduxjs/toolkit";

import shopReducer from "../store/shop";

const store = configureStore({
  reducer: { shop: shopReducer }
});

export default store;
