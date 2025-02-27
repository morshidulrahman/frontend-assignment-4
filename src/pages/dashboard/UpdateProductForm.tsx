/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/features/product/productApi";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const UpdateProductForm: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState(true);
  const [location, setLocation] = useState("");
  const [miles, setMiles] = useState(0);
  const [transmission, setTransmission] = useState("");
  const [fuel, setFuel] = useState("");
  const [seats, setSeats] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const {
    data: productResponse,
    isLoading: isFetching,
    refetch,
  } = useGetSingleProductQuery(productId as string);
  const [updateProduct] = useUpdateProductMutation();

  const productData = productResponse?.data ?? null;

  useEffect(() => {
    if (productData) {
      setName(productData?.name);
      setBrand(productData?.brand);
      setModel(productData?.model);
      setDescription(productData?.description);
      setImage(null);
      setRating(productData?.rating);
      setQuantity(productData?.quantity);
      setCategory(productData?.category);
      setPrice(productData?.price);
      setAvailable(productData?.available);
      setLocation(productData?.location || "");
      setMiles(productData?.miles || 0);
      setTransmission(productData?.transmission || "");
      setFuel(productData?.fuel || "");
      setSeats(productData?.seats || 0);
      setReviews(productData?.reviews || 0);
    }
  }, [productData]);

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_API_imgbb_key
      }`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data.data.url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let imageUrl = productData?.image || "";
      if (image) {
        imageUrl = await handleImageUpload(image);
      }

      const updatedProduct = {
        name,
        brand,
        model,
        description,
        image: imageUrl,
        rating,
        quantity,
        category,
        price,
        available,
        location,
        miles,
        transmission,
        fuel,
        seats,
        reviews,
      };

      await updateProduct({
        productId: productId as string,
        updatedProduct,
      });

      toast.success("Product updated successfully!");
      refetch();
    } catch (error) {
      console.error("Failed to update product:", error);
      toast.error("Failed to update product.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin w-10 h-10 text-green-600" />
      </div>
    );
  }

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="w-full p-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6">Update Product</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Brand
            </label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Model
            </label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Rating
            </label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              min="0"
              max="5"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              min="0"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              min="0"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Availability
            </label>
            <select
              value={available ? "true" : "false"}
              onChange={(e) => setAvailable(e.target.value === "true")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="true">Available</option>
              <option value="false">Out of Stock</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Miles
            </label>
            <input
              type="number"
              value={miles}
              onChange={(e) => setMiles(Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Transmission
            </label>
            <input
              type="text"
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fuel Type
            </label>
            <input
              type="text"
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Seats
            </label>
            <input
              type="number"
              value={seats}
              onChange={(e) => setSeats(Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reviews
            </label>
            <input
              type="number"
              value={reviews}
              onChange={(e) => setReviews(Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>

        {/* Image */}
        <div className="grid grid-cols-1 gap-2 mb-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              onChange={(e) =>
                setImage(e.target.files ? e.target.files[0] : null)
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
            {productData?.image && (
              <img
                src={productData.image}
                alt="Current Product"
                className="mt-2 h-32 w-32 object-cover rounded-md shadow-md"
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 mb-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          {isLoading ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProductForm;
