import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();

  // Sample product data (you can fetch this from your API or pass as props)
  const product = {
    id: 1,
    image: "https://i.postimg.cc/X70swtGw/1955044573-8664-1-9826.jpg",
    name: "Luxury Watch",
    description:
      "A premium luxury watch with a stainless steel band and a classic design.",
    price: 299.99,
    category: ["Watches", "Gadgets"],
    featured: true,
  };

  // State for the review form
  const [reviewData, setReviewData] = useState({
    name: "",
    rating: 0,
    review: "",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit the review
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewData.name && reviewData.rating && reviewData.review) {
      console.log("Review submitted:", reviewData);
      // Here, you can send the review data to your API or handle accordingly
      setReviewData({ name: "", rating: 0, review: "" }); // Reset form after submission
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      {/* Product Detail Section */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 px-8 py-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            {product.name}
          </h2>
          <p className="text-xl text-gray-700 mt-2">{product.description}</p>
          <div className="mt-4">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            <div className="mt-2">
              <span className="text-sm font-medium text-gray-600">
                Categories:{" "}
              </span>
              {product.category.join(", ")}
            </div>
            {product.featured && (
              <div className="mt-2 text-sm font-medium text-green-600">
                Featured Product
              </div>
            )}
          </div>
          <button
            className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg text-lg"
            onClick={() => alert("Added to cart")}
          >
            Order Now
          </button>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900">
          Customer Reviews
        </h3>
        <div className="mt-6 space-y-4">
          {/* Review 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="font-semibold text-gray-800">John Doe</span>
                <div className="text-yellow-500 mt-1">
                  {"★".repeat(5)} {/* 5-star rating */}
                </div>
              </div>
            </div>
            <p className="mt-3 text-gray-700">
              "This watch is absolutely stunning! The quality and design are
              top-notch, and it feels so luxurious on my wrist. Highly
              recommend!"
            </p>
          </div>

          {/* Review 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="font-semibold text-gray-800">Jane Smith</span>
                <div className="text-yellow-500 mt-1">
                  {"★".repeat(4)} {/* 4-star rating */}
                </div>
              </div>
            </div>
            <p className="mt-3 text-gray-700">
              "A beautiful watch with great build quality, but the clasp is a
              bit tricky to adjust. Otherwise, I'm very happy with my purchase!"
            </p>
          </div>
        </div>

        {/* Review Form Section */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Submit Your Review
          </h3>
          <form onSubmit={handleReviewSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={reviewData.name}
                  onChange={handleInputChange}
                  className="mt-2 p-3 w-full border rounded-md shadow-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Rating
                </label>
                <div className="mt-2 flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() =>
                        setReviewData((prevState) => ({
                          ...prevState,
                          rating: star,
                        }))
                      }
                      className={`text-xl ${
                        reviewData.rating >= star
                          ? "text-yellow-500"
                          : "text-gray-400"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Review
                </label>
                <textarea
                  name="review"
                  value={reviewData.review}
                  onChange={handleInputChange}
                  rows="4"
                  className="mt-2 p-3 w-full border rounded-md shadow-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg text-lg"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
