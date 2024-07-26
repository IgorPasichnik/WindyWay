import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import { listenerMiddleware } from "../middleware/auth";
import auth from "../features/auth/authSlice";
// import weatherReducer from "../features/weather/weatherSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
    // dataWeather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),

  // devTools: true,
});
