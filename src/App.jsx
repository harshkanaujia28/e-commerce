import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop";
import Shopcategory from "./pages/Shopcategory";
import Footer from "./components/footer/Footer";
import mem_banner from "./components/Assets/banner_mens.png";
import women_banner from "./components/Assets/banner_women.png";
import kids_banner from "./components/Assets/banner_kids.png";
import Loginsignup from "./pages/Loginsignup";
import Product from "./pages/Product";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Shop />
        </>
      ),
    },
    {
      path: "/Men",
      element: (
        <>
          <Navbar />
          <Shopcategory banner={mem_banner} category="men" />
          <Footer />
        </>
      ),
    },
    {
      path: "/womens",
      element: (
        <>
          <Navbar />
          <Shopcategory banner={women_banner} category="women" />
          <Footer />
        </>
      ),
    },
    {
      path: "/kids",
      element: (
        <>
          <Navbar />

          <Shopcategory banner={kids_banner} category="kid" />
          <Footer />
        </>
      ),
    },
  
    {
      path: "/Loginsignup",
      element: (
        <>
          <Navbar />
          <Loginsignup />
          <Footer />
        </>
      ),
    },
    {
      path: "/product",
      element: (
        <>
          <Navbar />
          <Product />
          <Footer />
        </>
      ),
    },
    {
      path: "/product/:productId",
      element: (
        <>
          <Navbar />
          {/* <Breadcrums /> */}
          <Product />

          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
