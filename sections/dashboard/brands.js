"use client";
import getbrands from "@/api/getbrands";
import Padding from "@/components/padding";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const Brands = () => {
  const [data, setdata] = useState();
  const [loading, setloading] = useState();
  useEffect(() => {
    const getdata = async () => {
      const data = await getbrands();
      if (!data) {
        return;
      }
      console.log(data);
      setdata(data);
    };
    getdata();
  }, []);
  return (
    <Padding>
      <div className=" flex justify-between py-4 pt-10 text-[2rem] font-Satoshi  font-bold  ">
        Brand Onboard
      </div>
      <div className=" bg-[#FFFFFF]  border-[#F1F1F1] border rounded-xl ">
        <div className=" font-Matter font-medium grid grid-cols-5 gap-6 px-5 py-3.5 ">
          <div>S.No</div>
          <div>Name</div>
          <div>Email</div>
          <div>Phone Number</div>
          <div>Date</div>
        </div>
        {data?.map((brand, idx) => (
          <div
            className={clsx(
              "  grid grid-cols-5 font-Matter gap-6 px-5 py-3.5 ",
              idx % 2 == 0 ? "bg-[#F9FAFB]" : " bg-white "
            )}
          >
            <div>{idx + 1}</div>
            <div className=" w-full truncate ">{brand?.brand}</div>
            <div className=" w-full truncate  lowercase">{brand?.email}</div>
            <div>{brand?.phone}</div>
            <div>{brand?.createdAt}</div>
          </div>
        ))}
      </div>
    </Padding>
  );
};

export default Brands;
