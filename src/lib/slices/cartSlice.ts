import { ProductType } from "@/types/popularProductType";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { selectUser } from '../slices/userSlice';
import { useSelector } from "react-redux";
import axios from "axios";
import { RootState,persistor} from "../store";
import { getStoredState } from "redux-persist";

type cartType = {
  cartItem: ProductType[];
};

const initialState = {
  cartItem: [],
} as cartType;



export const addToCart = createAsyncThunk("cart/addToCart", async (payload: ProductType) => {

  
  try {
   const cart= await axios.post('/api/cart', {
      
      action: 'add',
      product: payload,
      
    })

    return cart?.data?.data?.cart; // Return the payload if successful
  } catch (error) {
    console.error('Error updating cart in database:', error);
    throw error; // Throw the error if something goes wrong
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const item: any = state.cartItem.find((item) => item._id === action.payload);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item: any = state.cartItem.find((item) => item._id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    removeItem: (state, action) => {
      const removeItem = state.cartItem.filter((item) => item._id !== action.payload);
      state.cartItem = removeItem;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {

        state.loading = false;
         
          state.cartItem=action.payload;
        
      });
  },
});

export const { incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;





