import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (blog) => ({
        url: "/blog/create-post",
        method: "POST",
        body: blog,
      }),
    }),
  }),
});

export const { useCreateBlogMutation } = api;
