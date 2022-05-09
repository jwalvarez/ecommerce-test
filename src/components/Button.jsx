import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-black/95 rounded h-full w-full py-2 px-10 text-white text-sm hover:bg-black/90">
      {text}
    </button>
  );
};

export default Button;
