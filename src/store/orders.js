import { createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    value: [],
  },
  reducers: {
    setOrders: (state, action) => {
      state.value = action.payload;
    },
    setOrder: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state.value));
    },
  } 
})

export const { setOrders, setOrder } = ordersSlice.actions;

export default ordersSlice.reducer;