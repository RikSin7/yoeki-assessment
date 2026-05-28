import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submitContactForm } from "./contactService";
import type { ContactFormData, ContactState } from "./contactTypes";

const initialState: ContactState = {
  loading: false,
  success: false,
  error: null,
};

export const submitContact = createAsyncThunk(
  "contact/submit",
  async (formData: ContactFormData, { rejectWithValue }) => {
    try {
      return await submitContactForm(formData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Something went wrong. Please try again.");
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitContact.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetContactState } = contactSlice.actions;

export default contactSlice.reducer;