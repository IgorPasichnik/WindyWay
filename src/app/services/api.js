import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_USER,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.user?.token || localStorage.getItem("token");

    if (token && token !== null) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducePath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});

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
