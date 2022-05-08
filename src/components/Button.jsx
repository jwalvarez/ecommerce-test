import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-black/95 rounded w-full py-2 px-10 mt-4 text-white text-sm  hover:bg-black/90">
      {text}
    </button>
  );
};

export default Button;
