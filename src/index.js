import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Welcome from "./components/Welcome";
import WelcomeFC from "./components/WelcomeFC";
import Product from "./components/Product";
import Counter from "./components/Counter";

// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Product
      title="product-1"
      price="1000"
      description="lorem lorem lorem"
    ></Product>
    <Product
      title="product-2"
      price="1200"
      description="lorem lorem lorem"
    ></Product>
    <Product
      title="product-3"
      price="1400"
      description="lorem lorem lorem"
    ></Product>
    <Counter />
    <Welcome name="Bilal" sureName="Hekim" />
    <WelcomeFC />
    <App name="Bilal" sureName="Hekim" />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
