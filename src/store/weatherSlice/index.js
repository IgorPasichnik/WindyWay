import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeathers = createAsyncThunk(
  "weather/fetchWeather",
  async (location) => {
    const keyWeather = process.env.REACT_APP_KEY_WEATER;
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${keyWeather}&q=${location}`
    );
    const weathers = await response.json();

    return weathers;
  }
);

const initialState = {
  list: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeathers: (state, action) => {
      const { weather } = action.payload;
      state.list = weather;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeathers.pending, (state, action) => {});
    builder.addCase(fetchWeathers.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(fetchWeathers.rejected, (state, action) => {});
  },
});

export const { addWeathers } = weatherSlice.actions;
export default weatherSlice.reducer;
