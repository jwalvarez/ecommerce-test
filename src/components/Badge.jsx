import React from "react";

const Badge = ({ category }) => {
  return (
    <a
      className="z-10 absolute right-0 text-xs py-1 px-6 m-2 hover:bg-white bg-gray-50/90 rounded border-2 border-gray-300"
      href="http://"
    >
      {category}
    </a>
  );
};

export default Badge;
