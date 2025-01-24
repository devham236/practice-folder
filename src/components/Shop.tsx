import React from "react";
import { ShopPropsType } from "../types/allTypes";

const Shop = ({ data }: ShopPropsType) => {
  return (
    <div className="w-full mb-10 last:mb-0 p-3 bg-sky-100 rounded-lg shadow-xl flex items-center justify-between relative">
      <p className="absolute -top-6 left-0 font-bold">{data.name}</p>
      <p>{data.rating}/5</p>
      <div className="flex items-center">
        <p className="mr-2">info</p>
        <p className="mr-2">info</p>
        <p>info</p>
      </div>
      <p className=" underline">location</p>
    </div>
  );
};

export default Shop;
