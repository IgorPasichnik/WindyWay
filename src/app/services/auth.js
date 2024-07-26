import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: "users/login",
        method: "POST",
        body: userData,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "users/register",
        method: "POST",
        body: userData,
      }),
    }),
    current: builder.query({
      query: () => ({
        url: "users/current",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useCurrentQuery } =
  authApi;

export const {
  endpoints: { login, register, current },
} = authApi;
