import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactState } from './contactTypes';

const initialState: ContactState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
});

export const { reset } = contactSlice.actions;
export default contactSlice.reducer;
