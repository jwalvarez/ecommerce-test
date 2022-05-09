import React from "react";

const SecondaryButton = ({ text }) => {
  return (
    <button className="bg-white/5 rounded border-2 border-black w-full py-2 mt-4 text-black text-md font-medium hover:bg-white/30 backdrop-blur-sm">
      {text}
    </button>
  );
};

export default SecondaryButton;
