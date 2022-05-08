import { list } from "postcss";
import React from "react";

const categories = [
  "Shop All",
  "Olivia’s Favorites",
  "Bestsellers",
  "Skincare",
  "Makeup",
  "Body",
  "Fragrance",
  "Balms",
  "Shop our Sets",
  "GlossiWEAR",
  "Gift Shop",
  "Digital Gift Card",
];

const BottomHeader = ({ show }) => {
  const style = show
    ? "mt-5 mb-4 transition-all duration-500"
    : "invisible transition-all opacity-0 -translate-y-4 duration-300";

  return (
    <div className={style}>
      <ul className="flex xl:justify-center overflow-x-auto">
        {categories.map((category, index) => (
          <li
            key={index}
            className="whitespace-nowrap w-auto font-sans text-xs text-black font-bold mx-2"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomHeader;
