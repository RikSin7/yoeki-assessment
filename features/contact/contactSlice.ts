import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submitContactForm } from "./contactService";
import type { ContactFormData, ContactState } from "./contactTypes";

const initialState: ContactState = {
  status: "idle",
  error: null,
  lastSubmission: null,
};

export const submitContact = createAsyncThunk(
  "contact/submit",
  async (formData: ContactFormData, { rejectWithValue }) => {
    try {
      const response = await submitContactForm(formData);
      return response;
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
    resetFormStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitContact.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lastSubmission = action.meta.arg; // The original form data
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { resetFormStatus } = contactSlice.actions;
export default contactSlice.reducer;