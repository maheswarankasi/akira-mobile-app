import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  items: [], // { product, quantity, schedule }
  totalQuantity: 0,
  totalPrice: 0,
};

// மொத்த விலை மற்றும் எண்ணிக்கையை கணக்கிடும் Helper
const calculateTotals = (state) => {
  state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
  state.totalPrice = state.items.reduce((sum, item) => {
    const price = item.product?.variants?.[0]?.price || 0;
    return sum + (price * item.quantity);
  }, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload || [];
      calculateTotals(state);
    },
    addToCart: (state, action) => {
      const { product, quantity = 1, schedule = null } = action.payload;
      const existingItem = state.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += quantity;
        if (schedule) existingItem.schedule = schedule; // Schedule Update
      } else {
        state.items.push({ product, quantity, schedule });
      }
      calculateTotals(state);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        state.items = state.items.filter(item => item.product.id !== productId);
      } else {
        const existingItem = state.items.find(item => item.product.id === productId);
        if (existingItem) {
          existingItem.quantity = quantity;
        }
      }
      calculateTotals(state);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.product.id !== productId);
      calculateTotals(state);
    },
  },
});

export const { setCart, addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

// --- Redux Middleware: Cart மாறும்போது தானாகவே Local Storage-ல் சேமிக்க ---
export const cartStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  // 'cart/' என்று தொடங்கும் Actions நடந்தால் மட்டும் Storage-ல் Save செய்ய வேண்டும்
  if (action.type?.startsWith('cart/')) {
    const cartState = store.getState().cart.items;
    AsyncStorage.setItem('@cart', JSON.stringify(cartState)).catch(err => console.log(err));
  }
  return result;
};

export default cartSlice.reducer;