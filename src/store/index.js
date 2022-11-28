import { configureStore } from '@reduxjs/toolkit';

import shoppingCartReducer from './shoppingCart';
import productsReducer from './products';

export default configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    products: productsReducer,
  },
})