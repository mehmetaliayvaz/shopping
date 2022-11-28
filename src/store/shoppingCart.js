import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if(state.value.find(item => item.id === action.payload.id)) {
        state.value = state.value.map(item => {
          if(item.id === action.payload.id) {
            return {
              ...item, 
              quantity: item.quantity + 1
            }
          }
          return item;
        })
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      state.value = state.value.map(item => {
        if(item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item;
      })
    },
    decreaseQuantity: (state, action) => {
      state.value = state.value.map(item => {
        if(item.id === action.payload && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1
          }
        }
        return item;
      })
    },
  }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;