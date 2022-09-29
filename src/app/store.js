import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'

import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/UsersSlice';
import productsReducer from '../features/products/ProductsSlice';
import cartReducer from '../features/cart/CartSlice';

import { todosApi } from '../services/TodosApi'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    products: productsReducer,
    cart: cartReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});


setupListeners(store.dispatch);