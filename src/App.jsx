import React, { useState, useEffect } from "react";
import Product from "./components/Product";
import axios from "axios";
import TopAnnouncement from "./components/TopAnnouncement";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import BottomHeader from "./components/BottomHeader";

const abouts = [
  {
    icon: "M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z",
    message:
      "We got our start with Into The Gloss, the world’s best beauty website and our source for inspiration and information.",
  },
  {
    icon: "M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z",
    message:
      "As beauty editors, we’ve tried it all. We make our dream everyday products that don’t yet exist, are fun to use, and actually work.",
  },
  {
    icon: "M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z",
    message:
      "We stay in constant communication with real Glossier users to give you what you want (and because we enjoy it).",
  },
];

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
    <>
      <TopAnnouncement
        message={"¡Los productos de skincare que estabas buscando!"}
        link={""}
        underlinedMessage={"Descubre nuestros productos"}
      />

      <Nav />

      <Banner />

      <section className="relative bg-indigo-50 px-32 py-10">
        <div className="flex w-full">
          {abouts.map((description, index) => (
            <div
              key={index}
              className="py-4 mx-4 hover:text-indigo-400 cursor-default transition-all duration-700"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi my-4 text-gray-light"
                  viewBox="0 0 16 16"
                >
                  <path d={description.icon} />
                </svg>
              </span>
              <p className="font-normal text-xs text-gray-light">
                {description.message}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 w-full h-auto p-10 px-32">
        <div className="flex justify-between">
          <span className="flex">
            <h2 className="font-bold text-lg my-2 text-[rgb(34,34,34)]">
              Productos Kiwier
            </h2>
            <a href="" className="text-xl my-auto ml-2">
              🥝
            </a>
          </span>
          <span className="underline text-sm text-[rgb(74,74,74)] my-auto hover:text-indigo-400 hover:cursor-pointer">
            Ver todos los productos
          </span>
        </div>

        <div className="w-full mb-10">
          <div className="w-full flex justify-start whitespace-nowrap my-auto h-full overflow-auto">
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

        <Card
          title={"Productos para tu piel."}
          description={
            "Descubre productos increibles para el cuidado de tu piel, solo en Kiwier."
          }
        />

        <div className="w-full mb-10">
          <div className="w-full flex justify-start whitespace-nowrap my-auto h-full overflow-auto">
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
      </section>
    </>
  );
};

export default App;

// {products.length != 0 && (
//   <>
//     <Product
//       key={products[0]["sku"]}
//       productName={products[0]["product_name"]}
//       productShortDescription={products[0]["short_description"]}
//       price={products[0]["price"]}
//       imageUrl={products[0]["product_image"]}
//       category={products[0]["category_1"]}
//     />
//     <Product
//       key={products[1]["sku"]}
//       productName={products[1]["product_name"]}
//       productShortDescription={products[1]["short_description"]}
//       price={products[1]["price"]}
//       imageUrl={products[1]["product_image"]}
//       category={products[1]["category_1"]}
//     />
//   </>
// )}
