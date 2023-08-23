import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../types";
import { PRODUCT_STATUSES, PRODUCT_TYPES } from "../constants";
import moment from "moment";

const getRandomType = () => {
  return PRODUCT_TYPES[Math.floor(Math.random() * PRODUCT_TYPES.length)];
};

const getRandomStatus = () => {
  return PRODUCT_STATUSES[Math.floor(Math.random() * PRODUCT_STATUSES.length)];
};
const dummyText =
  "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ";
const dummyProds = Array(20)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: `Product ${i + 1}`,
    type: getRandomType(),
    description: dummyText,
    status: getRandomStatus(),
    createdAt: "20/08/2023",
  }));

type InitialState = {
  products: TProduct[];
};
const initialState: InitialState = {
  products: dummyProds,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<{ data: Omit<TProduct, "id" | "createdAt"> }>
    ) => {
      state.products = [
        {
          ...action.payload.data,
          id: state.products.length,
          createdAt: moment().format("DD/MM/YYYY"),
        },
        ...state.products,
      ];
    },
  },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
