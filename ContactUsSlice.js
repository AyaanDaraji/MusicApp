import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/ContactUs";

// Get hai
export const fetchContactUs = createAsyncThunk(
  "contactUs/fetchContactUs",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);

// Post hai
export const addContactUs = createAsyncThunk(
  "contactUs/addContactUs",
  async (artData, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, artData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);

const submitContactUsSlice = createSlice({
  name: "contactUs",
  initialState: {
    items: [],
    status: "idle", 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactUs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContactUs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchContactUs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Add hai
      .addCase(addContactUs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addContactUs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(addContactUs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default submitContactUsSlice.reducer;
