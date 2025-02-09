import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="relative">
      <img
        className="w-full lg:h-auto md:h-[35vh] h-[50vh] object-cover"
        src="https://i.postimg.cc/bJdGtVgk/Beige-Brown-Minimalist-Jewelry-Brand-Fashion-Photo-Collage-Facebook-Cover.jpg"
        alt="Fashion Banner"
      />
      <div className="absolute lg:top-1/3 md:top-16 top-1/4 left-6 right-6 md:left-16 md:right-16 lg:left-32 lg:right-32 w-[90%] md:w-[70%] lg:w-[40%] space-y-6  md:space-y-8">
        <h1 className="text-2xl  md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Wear Confidence, Define Elegance
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
          Unleash your signature style with exclusive fashion, statement
          accessories, and luxury watches—crafted for those who dare to stand
          out.
        </p>
        <Link
          to="/AllProducts"
          className="text-base md:text-lg bg-[#FFA500] text-white px-6 py-3 rounded-2xl hover:bg-[#FF8C00] transition-all duration-300"
        >
          See All Products
        </Link>
      </div>
    </div>
  );
};

export default Banner;
