import React from "react";
import Badge from "./Badge";
import Button from "./Button";

const Product = ({
  productName,
  productShortDescription,
  imageUrl,
  price,
  category,
  mr = 6,
}) => {
  const style = mr
    ? "mr-6 bg-[rgb(250,250,250)] w-auto rounded hover:drop-shadow-[0px_6px_rgba(24,24,24,1)] outline outline-1 outline-gray-200 mb-6 transition-all duration-300"
    : "mr-0 bg-[rgb(250,250,250)] w-auto rounded hover:drop-shadow-[0px_6px_rgba(24,24,24,1)] outline outline-1 outline-gray-200 mb-6 transition-all duration-300";

  return (
    <div className={style}>
      <figure className="relative overflow-hidden w-60">
        <Badge category={category} />
        <a className="z-10 absolute bottom-0 w-full text-xs py-1 px-6 mx-auto my-1">
          <div className="flex justify-center cursor-default">
            <div className="w-2 h-2 my-auto mx-2 bg-indigo-300 rounded-full border-2 border-indigo-400"></div>
            Original
          </div>
        </a>
        <img
          className="h-72 w-full rounded-t cursor-pointer hover:scale-110 transition-all duration-300"
          src={imageUrl}
          alt="Imagen de producto"
        />
      </figure>
      <div className="p-2">
        <a href="http://" className="hover:underline hover:text-indigo-800">
          <p className="font-bold text-lg mb-0 pb-0">{productName}</p>
          <p className="text-sm text-gray-700 pt-0 mt-0">
            {productShortDescription}
          </p>
        </a>
        <div className="flex justify-start h-8 my-4">
          <div className="w-5 h-5 my-auto mr-2 bg-indigo-300 rounded-full border-2 hover:border-indigo-400 cursor-pointer"></div>
          <div className="w-5 h-5 my-auto mr-2 bg-pink-300 rounded-full border-2 hover:border-indigo-400 cursor-pointer"></div>
          <div className="w-5 h-5 my-auto mr-2 bg-blue-300 rounded-full border-2 hover:border-indigo-400 cursor-pointer"></div>
        </div>
        <Button text={"Agregar - " + price} />
      </div>
    </div>
  );
};

export default Product;
