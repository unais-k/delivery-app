import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { RegisteredUserInterface } from "@/types/userTypes";
import { RootState } from "../store";

const initialState: { user: RegisteredUserInterface } = {
    user: {
        fullName: "",
        email: "",
        phone: "",
        token: "",
        password: "",
        _id: "",
        __v: 0,
        address: [],
        cart: [],
        wishlist: [],
        orders: [],
    },
};

const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<RegisteredUserInterface>) {
            state.user = action.payload;
        },
        clearUser(state) {
            state.user = initialState.user;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.userData.user;

export const userReducer = userSlice.reducer;
