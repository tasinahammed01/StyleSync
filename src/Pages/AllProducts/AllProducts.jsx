import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch("/Product.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Handle change in search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="all-products mx-auto w-[90%] lg:left-32 lg:right-32 px-4 mt-20">
      <h1 className="text-6xl text-center">All Products</h1>
      <hr className="w-[30%] mx-auto border-1 mt-4" />

      {/* Search Bar */}
      <div className="text-center mt-6">
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="product-card bg-white px-5 pb-10 rounded-lg shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="product-name text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="product-description text-gray-600 text-sm mb-2">
                {product.description.slice(0, 50)}...
              </p>
              <p className="product-price text-lg font-bold text-gray-800 mb-2">
                ${product.price}
              </p>
              <p className="product-category text-sm text-gray-500">
                {product.category}
              </p>

              {/* Show Details Link */}
              <div className="text-center mt-4">
                <Link
                  to={`/AllProducts/${product.id}`} // Replace with actual product ID if available
                  className="text-base md:text-lg bg-[#FFA500] text-white px-6 py-3 rounded-2xl hover:bg-[#FF8C00] transition-all duration-300"
                >
                  Show Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products found</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
