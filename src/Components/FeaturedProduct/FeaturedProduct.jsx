import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(4);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch("/Product.json")
      .then((response) => response.json())
      .then((data) => {
        // Filter products where featured is true
        const featuredProducts = data.filter((product) => product.featured === true);
        setProducts(featuredProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSeeMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  return (
    <div className="featured-products mx-auto w-[90%] lg:left-32 lg:right-32 px-4 mt-20">
      <h1 className="text-6xl text-center">Featured Products</h1>
      <hr className="w-[30%] mx-auto border-1 mt-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {products.slice(0, visibleProducts).map((product, index) => (
          <div key={index} className="product-card bg-white px-5 pb-10 rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="product-image w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="product-name text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="product-description text-gray-600 text-sm mb-2">{product.description.slice(0, 150)}...</p>
            <p className="product-price text-lg font-bold text-gray-800 mb-2">${product.price}</p>
            <p className="product-category text-sm text-gray-500">{product.category}</p>

            {/* Show Details Link */}
            <div className="text-center mt-4">
              <Link
                to={`/ProductDetails/${product.id}`} // Replace with actual product ID if available
                className="text-base md:text-lg bg-[#FFA500] text-white px-6 py-3 rounded-2xl hover:bg-[#FF8C00] transition-all duration-300"
              >
                Show Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {visibleProducts < products.length && (
        <div className="see-more-btn text-center mt-4">
          <button
            onClick={handleSeeMore}
            className="bg-[#FFA500] text-white py-2 px-4 rounded-2xl hover:bg-[#FF8C00] transition-all duration-300"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedProduct;
