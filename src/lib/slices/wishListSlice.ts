import { ProductType } from "@/types/popularProductType";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type wishListType = {
    wishListItem: ProductType[];
    loading: boolean;
};

const initialState = {
    wishListItem: [],
    loading: false,
} as wishListType;


export const addToWishlist = createAsyncThunk("wishlist/addToWishlist", async ({product}:{product:ProductType}) => {
    try {
        const cart = await axios.post("/api/wishlist", {
            action: "add",
            product: product,
        });

        return cart?.data?.data?.wishlist; // Return the payload if successful
    } catch (error) {
        console.error("Error updating cart in database:", error);
        throw error; // Throw the error if something goes wrong
    }
});


export const removeItem = createAsyncThunk("wishlist/removeItem", async (payload: string) => {
    try {
        const response = await axios.delete(`/api/wishlist`, {
            params: payload,
        });

        return response?.data?.data;
    } catch (error) {
        console.error("Error incrementing quantity in database:", error);
        throw error; // Throw the error if something goes wrong
    }
});

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        removeItem: (state, action) => {
            const removeItem = state.wishListItem.filter((item) => item._id !== action.payload);
            state.wishListItem = removeItem;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToWishlist.pending, (state) => {
                state.loading = true;
            })
            .addCase(addToWishlist.fulfilled, (state, action) => {
                state.loading = false;

                state.wishListItem = action.payload;
            })
            .addCase(removeItem.pending, (state) => {
                state.loading = true;
            })
            .addCase(removeItem.fulfilled, (state, action) => {
                state.loading = false;

                state.wishListItem = action.payload;
            });
    },
});

export const wishlistReducer = wishlistSlice.reducer;
