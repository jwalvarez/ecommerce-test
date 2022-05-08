import React from "react";

const Product = () => {
  return (
    <div className="bg-[rgb(250,250,250)] w-72 rounded hover:drop-shadow-[0px_6px_rgba(24,24,24,1)] outline outline-1 outline-gray-200 mr-6 transition-all duration-300">
      <figure className="relative">
        <a
          className="absolute right-0 text-xs py-1 px-6 m-2 hover:bg-white bg-gray-50/90 rounded border-2 border-gray-300"
          href="http://"
        >
          Best seller
        </a>
        <a className="absolute bottom-0 w-full text-xs py-1 px-6 mx-auto my-1">
          <div className="flex justify-center cursor-default">
            <div className="w-2 h-2 my-auto mx-2 bg-indigo-300 rounded-full border-2 border-indigo-400"></div>
            Original
          </div>
        </a>
        <img
          className="rounded-t cursor-pointer"
          src="https://static-assets.glossier.com/production/spree/images/attachments/000/003/001/portrait_normal/Lavender-BDC_hover.jpg?1651582497=&w=600&q=80&fm=webp"
          alt="Imagen de producto"
        />
      </figure>
      <div className="p-2">
        <a href="http://" className="hover:underline hover:text-indigo-800">
          <p className="font-bold text-lg mb-0 pb-0">Balm Dotcom</p>
          <p className="text-sm text-gray-700 pt-0 mt-0">
            universal skin salve
          </p>
        </a>
        <div className="flex justify-start h-8">
          <div className="w-5 h-5 my-auto mr-2 bg-indigo-300 rounded-full border-2 hover:border-indigo-400 cursor-pointer"></div>
          <div className="w-5 h-5 my-auto mr-2 bg-pink-300 rounded-full border-2 hover:border-indigo-400 cursor-pointer"></div>
          <div className="w-5 h-5 my-auto mr-2 bg-blue-300 rounded-full border-2 hover:border-indigo-400 cursor-pointer"></div>
        </div>
        <button className="bg-black/95 rounded w-full py-3 mt-4 text-white text-sm font-medium hover:bg-black/90">
          Agregar - $12.000
        </button>
      </div>
    </div>
  );
};

export default Product;
