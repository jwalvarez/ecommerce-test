import React from "react";
import SecondaryButton from "./SecondaryButton";
import Button from "./Button";
import Card from "./Card";
import bannerImg from "../pexels-adrienne-andersen-2661256.jpg";

const Banner = () => {
  return (
    <section className="-top-[100px] z-10 relative px-32 -mb-[100px]">
      <img
        className="absolute inset-0 object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src="https://images.pexels.com/photos/7607290/pexels-photo-7607290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Couple on a bed with a dog"
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-indigo-800/30 sm:to-red-200/90"></div>
      <div className="relative px-4 py-32 mx-auto h-screen items-center lg:flex">
        <div className="w-1/3 pr-20 text-center sm:text-left">
          <h1 className="font-extrabold text-6xl italic">
            Kiwier.
            <br />
            {/* <a href="" className="text-5xl my-auto ml-2">
              🥝
            </a> */}
          </h1>
          <h2 className="font-md text-2xl italic text-black">
            Encuentro tus productos de skincare.
          </h2>
          <div className="flex w-full gap-4 mt-4 text-center">
            <Button text="Descubrir" />
            <SecondaryButton text="Tienda" />
          </div>
        </div>
        <div className="w-2/3 h-full">
          <Card
            title={"Productos kiwi"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem omnis atque culpa repellendus."
            }
            img={bannerImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
