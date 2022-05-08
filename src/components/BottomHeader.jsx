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

const BottomHeader = () => {
  return (
    <div className="py-1 mt-2 w-full">
      <ul className="flex justify-center">
        {categories.map((category, index) => (
          <li key={index} className="font-sans text-xs font-bold mx-2">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomHeader;
