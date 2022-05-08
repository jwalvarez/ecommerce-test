import React from "react";
import SecondaryButton from "./SecondaryButton";
import Button from "./Button";
import Card from "./Card";

const Banner = () => {
  return (
    <section className="-top-[70px] relative px-20">
      <img
        className="absolute inset-0 object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src="https://images.pexels.com/photos/7607290/pexels-photo-7607290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Couple on a bed with a dog"
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-indigo-100 sm:to-pink-200/70"></div>
      <div className="relative px-4 py-32 mx-auto h-screen items-center lg:flex">
        <div className="pr-20 text-center sm:text-left">
          <h1 className="font-extrabold text-6xl italic">
            Kiwier
            <br />
            {/* <a href="" className="text-5xl my-auto ml-2">
              🥝
            </a> */}
          </h1>
          <h2 className="font-md text-4xl italic text-black">
            Encuentro tus productos para skincare.
          </h2>
          <div className="flex w-full gap-4 mt-8 text-center">
            <Button text="Empezar a comprar" />
            <SecondaryButton text="Ver tienda" />
          </div>
        </div>
        <div className="w-2/3 h-full">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Banner;
