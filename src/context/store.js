import { configureStore } from '@reduxjs/toolkit';
import wishlistSlice from './slice/wishlistSlice';
import cartSlice from './slice/cartSlice';
import navigationSlice from './slice/navigationSlice';
import { api } from './api/api';

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    cart: cartSlice,
    navigation: navigationSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
