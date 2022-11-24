import { configureStore } from '@reduxjs/toolkit';

import shoppingCartReducer from './shoppingCart';

export default configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
})