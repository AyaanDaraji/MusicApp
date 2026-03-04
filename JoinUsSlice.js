import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/JoinUs";

// Get hai
export const fetchJoinUs = createAsyncThunk(
  "joinUs/fetchJoinUs",
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
export const addJoinUs = createAsyncThunk(
  "JoinUs/addJoinUs",
  async (artData, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, artData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);

const submitJoinUsSlice = createSlice({
  name: "joinUs",
  initialState: {
    items: [],
    status: "idle", 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoinUs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJoinUs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchJoinUs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Add hai
      .addCase(addJoinUs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addJoinUs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(addJoinUs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default submitJoinUsSlice.reducer;
