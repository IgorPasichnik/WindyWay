import { createListenerMiddleware } from "@reduxjs/toolkit";
import { authApi } from "../app/services/auth";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: (action) => {
    const isLogin = authApi.endpoints.login.matchFulfilled(action);
    const isRegister = authApi.endpoints.register.matchFulfilled(action);
    return isLogin || isRegister;
  },
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    if (action.payload.token) {
      localStorage.setItem("token", action.payload.token);
    }
  },
});
