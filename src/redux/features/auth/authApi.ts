import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    changePassword: builder.mutation({
      query: (passwordData) => ({
        url: "/change-password",
        method: "POST",
        body: passwordData,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useChangePasswordMutation,
} = authApi;
