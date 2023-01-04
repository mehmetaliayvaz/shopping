import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    value: [],
  },
  reducers: {
    setShoppingCart: (state, action) => {
      state.value = action.payload;
    },
    addToCart: (state, action) => {
      if (state.value.find((item) => item.id === action.payload.id)) {
        state.value = state.value.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("shoppingCart", JSON.stringify(state.value));
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
      localStorage.setItem("shoppingCart", JSON.stringify(state.value));
    },
    removeCart: (state) => {
      state.value = [];
      localStorage.setItem("shoppingCart", JSON.stringify(state.value));
    },
    updateQuantity: (state, action) => {
      state.value = state.value.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });
      localStorage.setItem("shoppingCart", JSON.stringify(state.value));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  setShoppingCart,
  removeCart,
  updateQuantity,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
