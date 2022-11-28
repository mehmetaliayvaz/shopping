import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
    },
  } 
})

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;