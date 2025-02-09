import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/AllProducts/AllProducts";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/AllProducts",
                element: <AllProducts></AllProducts>
            },
            {
                path: "/contactus",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/AllProducts/:productId",
                element: <ProductDetails></ProductDetails>
            },
        ]
    }
  ])