import { ProductType } from "@/types/popularProductType";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { selectUser } from "../slices/userSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { RootState, persistor } from "../store";
import { getStoredState } from "redux-persist";

type cartType = {
  cartItem: ProductType[];
  loading: boolean;
};

const initialState = {
  cartItem: [],
  loading: false,
} as cartType;

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (payload: ProductType) => {
    try {
      const cart = await axios.post("/api/cart", {
        action: "add",
        product: payload,
      });

      return cart?.data?.data?.cart; // Return the payload if successful
    } catch (error) {
      console.error("Error updating cart in database:", error);
      throw error; // Throw the error if something goes wrong
    }
  }
);
export const incrementQuantity = createAsyncThunk(
  "cart/incrementQuantity",
  async (payload: string) => {
    try {
      console.log("aaaaaaaaa here is go");
      const response = await axios.post("/api/cart", {
        action: "increment",
        product: payload,
      });

      return response?.data?.data;
    } catch (error) {
      console.error("Error incrementing quantity in database:", error);
      throw error;
    }
  }
);
export const decrementQuantity = createAsyncThunk(
  "cart/decrementQuantity",
  async (payload: string) => {
    try {
      console.log("aaaaaaaaa here is go");
      const response = await axios.post("/api/cart", {
        action: "decrement",
        product: payload,
      });

      return response?.data?.data;
    } catch (error) {
      console.error("Error incrementing quantity in database:", error);
      throw error; // Throw the error if something goes wrong
    }
  }
);

export const removeItem = createAsyncThunk(
  "cart/removeItem",
  async (payload: string) => {
    try {
      console.log("aaaaaaaaa here is go");
      const response = await axios.delete(`/api/cart`, {
        params: payload,
      });

      return response?.data?.data;
    } catch (error) {
      console.error("Error incrementing quantity in database:", error);
      throw error; // Throw the error if something goes wrong
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const removeItem = state.cartItem.filter(
        (item) => item._id !== action.payload
      );
      state.cartItem = removeItem;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;

        state.cartItem = action.payload;
      })
      .addCase(incrementQuantity.pending, (state) => {
        state.loading = true;
      })
      .addCase(incrementQuantity.fulfilled, (state, action) => {
        state.loading = false;

        state.cartItem = action.payload;
      })
      .addCase(decrementQuantity.pending, (state) => {
        state.loading = true;
      })
      .addCase(decrementQuantity.fulfilled, (state, action) => {
        state.loading = false;

        state.cartItem = action.payload;
      }).addCase( removeItem .pending, (state) => {
        state.loading = true;
      })
      .addCase( removeItem .fulfilled, (state, action) => {
        state.loading = false;

        state.cartItem = action.payload;
      });
  },
});

export const cartReducer = cartSlice.reducer;
