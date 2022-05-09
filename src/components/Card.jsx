import React from "react";

const Card = ({ title, description, img }) => {
  return (
    <div
      href=""
      className="cursor-default relative block group h-full bg-indigo-300 w-full my-4"
    >
      <span className="absolute inset-0 border-2 border-black border-dashed"></span>
      <div className="bg-red-100 overflow-hidden relative flex items-end h-full outline outline-2 -translate-x-2 -translate-y-2">
        <img
          className="absolute h-full w-full object-cover content-center scale-110 hover:scale-105 transition-all duration-300"
          // src="https://images.ctfassets.net/p3w8f4svwgcg/7m9Yd5o90sCuVEFsiRlZic/fa318c31213cc27297d11c8de47eb416/NewHP_Makeup_Enga.jpg?w=960&q=80&fm=webp"
          src={img}
          alt=""
        />
        <div className="p-8 transition-opacity relative">
          <h2 className="mt-4 text-2xl font-medium">{title}</h2>

          <p className="my-4">{description}</p>

          <a className="font-bold underline hover:text-indigo-600" href="">
            Leer más &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
