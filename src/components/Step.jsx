import React from "react";
import Button from "./Button";
import SecondaryButton from "./SecondaryButton";

const Step = ({ title, description, buttonText }) => {
  return (
    <div className="w-1/3 text-center">
      <h2 className="font-black text-4xl">{title}</h2>
      <p className="my-8">{description}</p>
      <div className="h-16">
        <SecondaryButton text={buttonText} />
      </div>
    </div>
  );
};

export default Step;
