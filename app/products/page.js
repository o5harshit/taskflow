"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get("/api/products");

      setProducts(response.data.products);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  // Insert dummy data
  const addDummyData = async () => {
    try {
      setAdding(true);

      const response = await axios.post("/api/products");

      console.log(response.data);

      // Fetch products again after inserting
      await fetchProducts();

      alert("Dummy data added successfully!");
    } catch (error) {
      console.error("Failed to add dummy data", error);

      alert("Failed to add dummy data");
    } finally {
      setAdding(false);
    }
  };

  // Run when page loads
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              Products
            </h1>

            <p className="mt-2 text-gray-600">
              Products fetched from Prisma + PostgreSQL
            </p>
          </div>

          <button
            onClick={addDummyData}
            disabled={adding}
            className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {adding ? "Adding..." : "Add Dummy Data"}
          </button>

        </div>


        {/* Loading */}
        {loading && (
          <p className="text-gray-600">
            Loading products...
          </p>
        )}


        {/* No products */}
        {!loading && products.length === 0 && (
          <div className="rounded-lg bg-white p-10 text-center shadow">
            <p className="text-gray-500">
              No products found.
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Click Add Dummy Data to insert products.
            </p>
          </div>
        )}


        {/* Products */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (

            <div
              key={product.id}
              className="rounded-xl bg-white p-6 shadow"
            >

              <div className="mb-4 flex items-start justify-between">

                <h2 className="text-xl font-semibold">
                  {product.name}
                </h2>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  {product.category?.name}
                </span>

              </div>


              <p className="mb-4 text-gray-600">
                {product.description}
              </p>


              <div className="mb-4 flex justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Price
                  </p>

                  <p className="text-lg font-bold">
                    ₹{product.price}
                  </p>
                </div>


                <div>
                  <p className="text-sm text-gray-500">
                    Stock
                  </p>

                  <p className="text-lg font-bold">
                    {product.stock}
                  </p>
                </div>

              </div>


              {/* Reviews */}
              <div className="border-t pt-4">

                <h3 className="mb-3 font-semibold">
                  Reviews ({product.reviews.length})
                </h3>

                {product.reviews.map((review) => (

                  <div
                    key={review.id}
                    className="mb-2 rounded-lg bg-gray-50 p-3"
                  >

                    <div className="flex justify-between">

                      <span>
                        {"⭐".repeat(review.rating)}
                      </span>

                      <span className="text-sm text-gray-400">
                        {review.rating}/5
                      </span>

                    </div>

                    {review.comment && (
                      <p className="mt-1 text-sm text-gray-600">
                        {review.comment}
                      </p>
                    )}

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}