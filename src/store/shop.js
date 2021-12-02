import { createSlice } from "@reduxjs/toolkit";
import { shop, area, category } from "../data";
const initialShopState = {
  shop: shop,
  area: area,
  category: category
};

const shopSlice = createSlice({
  name: "shop",
  initialState: initialShopState,
  reducers: {
    shopStore(state, action) {
      state.shop = [...action.payload, ...state.shop];
    },
    remove(state, action) {
      state.shop = state.shop.filter((item) => item.id !== action.payload);
    }
  }
});

export const shopActions = shopSlice.actions;

export default shopSlice.reducer;
