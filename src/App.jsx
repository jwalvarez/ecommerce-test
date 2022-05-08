import React, { useState, useEffect } from "react";
import Product from "./components/Product";
import axios from "axios";

const App = () => {
  useEffect(() => {
    getProducts();

    return () => {
      console.log("second");
    };
  }, []);

  const [products, setProducts] = useState([]);

  var config = {
    method: "get",
    url: "https://api.steinhq.com/v1/storages/62759933bca21f053e914897/products",
    headers: {
      Authorization: "Basic c2hvcDpxd2VydHk=",
    },
  };

  const getProducts = () => {
    axios(config)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-gray-50 w-100 h-screen p-10">
      <span className="flex">
        <h2 className="font-bold text-6xl my-8">Kiwier</h2>
        <a href="" className="text-5xl my-auto ml-2">
          🥝
        </a>
      </span>
      <div className="w-auto my-auto flex flex-nowrap flex-row justify-start overflow-auto">
        {products.map((product) => (
          <Product
            key={product["sku"]}
            productName={product["product_name"]}
            productShortDescription={product["short_description"]}
            price={product["price"]}
            imageUrl={product["product_image"]}
            category={product["category_1"]}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
