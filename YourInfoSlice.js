import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/YourInfo";

// Get USER INFO
export const fetchYourInfo = createAsyncThunk(
  "submitYourInfo/fetchYourInfo",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data[0] || null; // only first record
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// SAVE/UPDATE USER INFO
export const saveYourInfo = createAsyncThunk(
  "submitYourInfo/saveYourInfo",
  async (data, thunkAPI) => {
    try {
      const state = thunkAPI.getState().submitYourInfo;

      if (state.item && state.item.id) {
        
        const response = await axios.put(
          `${API_URL}/${state.item.id}`,
          data
        );
        return response.data;
      } else {
        
        const response = await axios.post(API_URL, data);
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const YourInfoSlice = createSlice({
  name: "submitYourInfo",
  initialState: {
    item: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchYourInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchYourInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.item = action.payload;
      })
      .addCase(fetchYourInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(saveYourInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveYourInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.item = action.payload;
      })
      .addCase(saveYourInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default YourInfoSlice.reducer;