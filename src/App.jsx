import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/Products/ProductList";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
