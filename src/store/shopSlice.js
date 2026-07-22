import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentShop: 'pure_natural', // Default ஆ pure_natural இருக்கும்
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setCurrentShop: (state, action) => {
      state.currentShop = action.payload;
    },
  },
});

export const { setCurrentShop } = shopSlice.actions;
export default shopSlice.reducer;