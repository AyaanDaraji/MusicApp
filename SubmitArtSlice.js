import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/SubmitArt";

export const fetchSubmitArt = createAsyncThunk(
  "submitArt/fetchSubmitArt",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addSubmitArt = createAsyncThunk(
  "submitArt/addSubmitArt",
  async (artData, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, artData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteArt = createAsyncThunk(
  "submitArt/deleteArt",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const submitArtSlice = createSlice({
  name: "submitArt",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubmitArt.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSubmitArt.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(addSubmitArt.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteArt.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (art) => art.id !== action.payload
        );
      });
  },
});

export default submitArtSlice.reducer;