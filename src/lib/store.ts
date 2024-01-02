import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/lib/slices/userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'user',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: {
        userData: persistedReducer,
    },
});
export const persistor = persistStore(store)
export type State = typeof store;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
