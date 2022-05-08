import React, { useState, useEffect } from "react";
import Product from "./components/Product";
import axios from "axios";
import TopAnnouncement from "./components/TopAnnouncement";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import BottomHeader from "./components/BottomHeader";

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
        message={"¡Los productos de skincare que estabsa buscando!"}
        link={""}
        underlinedMessage={"Descubre nuestros productos"}
      />

      <Nav />

      <Banner />

      <section className="bg-indigo-50 px-10 py-10">
        <h2 className="font-bold text-3xl">¿Por qué Kiwier?</h2>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          sequi, rerum in dolorum quo nostrum explicabo? Provident inventore
          voluptatem, aut maiores fugit quaerat? Obcaecati adipisci a cumque
          ratione distinctio soluta! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Assumenda, porro eum esse rerum labore dolore
          suscipit. Nam consectetur aliquam dolores blanditiis iure ea labore
          consequatur? Excepturi illo vel totam optio?
        </p>
      </section>

      <div className="bg-gray-50 w-full h-auto p-10">
        <span className="flex">
          <h2 className="font-bold text-2xl my-8 text-[rgb(34,34,34)]">
            Productos Kiwier
          </h2>
          <a href="" className="text-xl my-auto ml-2">
            🥝
          </a>
        </span>

        <section className="w-full flex justify-between mb-10">
          <div className="w-1/2 flex justify-start flex-wrap my-auto h-full overflow-auto">
            {products.length != 0 && (
              <>
                <Product
                  key={products[0]["sku"]}
                  productName={products[0]["product_name"]}
                  productShortDescription={products[0]["short_description"]}
                  price={products[0]["price"]}
                  imageUrl={products[0]["product_image"]}
                  category={products[0]["category_1"]}
                />
                <Product
                  key={products[1]["sku"]}
                  productName={products[1]["product_name"]}
                  productShortDescription={products[1]["short_description"]}
                  price={products[1]["price"]}
                  imageUrl={products[1]["product_image"]}
                  category={products[1]["category_1"]}
                />
              </>
            )}
          </div>
          <div className="w-1/2">
            <Card />
          </div>
        </section>

        <section className="w-full relative bg-red-300"></section>
      </div>
    </>
  );
};

export default App;
