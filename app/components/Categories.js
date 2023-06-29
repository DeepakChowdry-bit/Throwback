import React from "react";

const Categories = () => {
  return (
    <div>
      <section className="flex flex-col px-2">
        <h2 className="font-bold px-4 my-8 tracking-widest text-base">
          CATEGORIES
        </h2>
        <div className="flex items-center justify-center">
          <div className="flex flex-col mx-4 items-center">
            <img
              className="w-24 h-24 rounded-full object-cover lg:w-60 lg:h-60"
              src="/shirt4.jpg"
              alt=""
            />
            <h3>Shirts</h3>
          </div>
          <div className="flex flex-col mx-4 items-center">
            <img
              className="w-24 h-24 rounded-full object-cover lg:w-60 lg:h-60"
              src="/trouser3.jpg"
              alt=""
            />
            <h3>Trousers</h3>
          </div>
        </div>
      </section>
      <section className="flex flex-col px-2">
        <h2 className="font-bold px-4 my-8 tracking-widest text-base">
          NEW ARRIVALS
        </h2>
        <div className="flex items-center justify-center">
          <div className="flex flex-col mx-2">
            <img
              className="object-cover lg:w-60 lg:h-60"
              src="/loro2.jpg"
              alt=""
            />
            <h3 className="text-sm font-semibold">Blue Trouser</h3>
            <p className="text-xs">₹799</p>
          </div>
          <div className="flex flex-col mx-2">
            <img
              className="object-cover lg:w-60 lg:h-60"
              src="/loro3.jpg"
              alt=""
            />
            <h3 className="text-sm font-semibold">White Trouser</h3>
            <p className="text-xs">₹1199</p>
          </div>
        </div>
        <h2 className="w-full text-center my-8 font-semibold px-4 text-sm">SHOW MORE</h2>
      </section>
    </div>
  );
};

export default Categories;
