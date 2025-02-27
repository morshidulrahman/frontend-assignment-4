import { baseApi } from "@/redux/api/baseApi";
export interface Product {
  name: string;
  brand: string;
  model: string;
  description: string;
  image: string;
  rating: number;
  quantity: number;
  category: string;
  price: number;
  available: boolean;
  location: string;
  miles: number;
  transmission: string;
  fuel: string;
  seats: number;
  reviews: number;
  data?: Product;
}

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (category) => ({
        url: category ? `/allproducts?category=${category}` : `/allproducts`,
        method: "GET",
      }),
    }),
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (newProduct) => ({
        url: `/add-product`,
        method: "POST",
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation<
      Product,
      { productId: string; updatedProduct: Partial<Product> }
    >({
      query: ({ productId, updatedProduct }) => ({
        url: `/product/${productId}`,
        method: "PUT",
        body: updatedProduct,
      }),
    }),
    getSingleProduct: builder.query({
      query: (productId) => ({
        url: `/product/${productId}`,
        method: "GET",
      }),
    }),
    deleteProduct: builder.mutation<{ message: string }, string>({
      query: (productId) => ({
        url: `/product/${productId}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetSingleProductQuery,
} = productApi;
