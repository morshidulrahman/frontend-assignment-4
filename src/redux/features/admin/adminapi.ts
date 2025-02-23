import { baseApi } from "../../api/baseApi";

const getAlldataApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAlldata: builder.query({
      query: () => ({
        url: "/admin/data-statics",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAlldataQuery } = getAlldataApi;
