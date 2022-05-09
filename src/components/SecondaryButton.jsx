import React from "react";

const SecondaryButton = ({ text }) => {
  return (
    <button className="bg-white/5 hover:bg-white/10 rounded border border-black h-full w-full py-2 px-10 text-black text-sm font-semibold backdrop-blur-md">
      {text}
    </button>
  );
};

export default SecondaryButton;
