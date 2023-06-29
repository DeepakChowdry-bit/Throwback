import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

const page = () => {
  return (
    <div>
      <section className="flex flex-col px-2 py-20 items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col mx-2 my-2">
            <img
              className="w-80 object-cover lg:w-60 lg:h-60"
              src="/Shirt (2).jpg"
              alt=""
            />
            <h3 className="text-base font-semibold mt-1">Regular Fit Linen-blend shirt</h3>
            <p className="text-sm font-medium my-1">₹799</p>
            <p className="text-xs font-medium mt-2">COLOURS</p>
            <div className="flex items-center">
              <img className="mr-2" src="/shirtred.webp" alt="" />
              <img className="mr-2" src="/shirtolive.webp" alt="" />
              <img className="mr-2" src="/shirtbeige.webp" alt="" />
              <img className="mr-2" src="/shirtblack.webp" alt="" />
            </div>
            <p className="text-xs font-medium mt-2">SIZES</p>
            <div className="flex items-center my-2">
              <p className="text-sm mr-2 py-2 px-5  bg-stone-300">S</p>
              <p className="text-sm mr-2 py-2 px-5 bg-stone-300">M</p>
              <p className="text-sm mr-2 py-2 px-5 bg-stone-300">L</p>
            </div>
            <p className="text-base font-semibold my-3 w-full h-12 bg-zinc-800 flex items-center justify-center text-white">
              <HiOutlineShoppingBag className="mx-1 text-lg" />Add</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
