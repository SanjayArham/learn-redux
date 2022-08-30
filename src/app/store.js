import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/UsersSlice';
import productsReducer from '../features/products/ProductsSlice';
import cartReducer from '../features/cart/CartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
