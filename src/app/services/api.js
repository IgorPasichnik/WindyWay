import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

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
