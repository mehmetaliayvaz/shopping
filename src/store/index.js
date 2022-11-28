import { configureStore } from '@reduxjs/toolkit';

import shoppingCartReducer from './shoppingCart';
import productsReducer from './products';
import ordersReducer from './orders';

export default configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    products: productsReducer,
    orders: ordersReducer,
  },
})