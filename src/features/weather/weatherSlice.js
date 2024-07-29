import { createSlice } from "@reduxjs/toolkit";
import { fetchWeathers } from "../../app/services/api";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weathers: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeathers.fulfilled, (state, action) => {
      state.weathers = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchWeathers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchWeathers.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { reducer: weatherReducer } = weatherSlice;
