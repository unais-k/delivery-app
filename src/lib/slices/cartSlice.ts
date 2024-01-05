import { ProductType } from "@/types/popularProductType";
import { createSlice } from "@reduxjs/toolkit";


type cartType = {
    cartItem: ProductType[];
};

const initialState = {
    cartItem: [],
} as cartType;

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart:any = state.cartItem.find((item) => item._id === action.payload._id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cartItem.push({ ...action.payload, quantity: 1 });
            }
        },

        incrementQuantity: (state, action) => {
            const item:any = state.cartItem.find((item) => item._id === action.payload);
            item.quantity++;
        },

        decrementQuantity: (state, action) => {
            const item:any = state.cartItem.find((item) => item._id === action.payload);
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
});


export const { addToCart, removeItem, incrementQuantity,decrementQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;




