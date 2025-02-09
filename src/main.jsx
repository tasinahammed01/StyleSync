import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import AllProducts from "./Pages/AllProducts/AllProducts.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>} />
        <Route path="AllProducts" element={<AllProducts></AllProducts>} />
        <Route path="contactus" element={<ContactUs></ContactUs>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
