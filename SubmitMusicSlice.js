import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/SubmitMusic";

export const fetchSubmitMusic = createAsyncThunk(
  "submitMusic/fetchSubmitMusic",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addSubmitMusic = createAsyncThunk(
  "submitMusic/addSubmitMusic",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteAlbum = createAsyncThunk(
  "submitMusic/deleteAlbum",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const submitMusicSlice = createSlice({
  name: "submitMusic",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubmitMusic.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSubmitMusic.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchSubmitMusic.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addSubmitMusic.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addSubmitMusic.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(addSubmitMusic.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteAlbum.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (album) => album.id !== action.payload
        );
      });
  },
});

export default submitMusicSlice.reducer;