import React from "react";
import Product from "./components/Product";

const App = () => {
  return (
    <div className="bg-gray-50 w-100 h-screen p-10">
      <span className="flex">
        <h2 className="font-bold text-6xl my-8">Kiwier</h2>
        <a href="" className="text-5xl my-auto ml-2">
          🥝
        </a>
      </span>
      <section className="flex">
        <Product />
        <Product />
        <Product />
      </section>
    </div>
  );
};

export default App;
