import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/lib/slices/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { cartReducer } from "./slices/cartSlice";

const persistConfigUser = {
    key: "user",
    storage,
};
const persistConfigCart = {
    key: "cart",
    storage,
};
const persistedReducerUser = persistReducer(persistConfigUser, userReducer);
const persistedReducerCart = persistReducer(persistConfigCart, cartReducer);

export const store = configureStore({
    reducer: {
        userData: persistedReducerUser,
        cart: persistedReducerCart
    },
});
export const persistor = persistStore(store);
export type State = typeof store;

  

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
