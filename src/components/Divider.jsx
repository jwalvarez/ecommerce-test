import React from "react";

const Divider = ({ text }) => {
  return (
    <div className="relative flex py-5 items-center w-3/4 mx-auto">
      <div className="flex-grow border-t border-dashed border-gray-300"></div>
      <span className="flex-shrink mx-4 text-gray-300">{text}</span>
      <div className="flex-grow border-t border-dashed border-gray-300"></div>
    </div>
  );
};

export default Divider;
