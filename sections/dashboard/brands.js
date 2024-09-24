"use client";
import getbrands from "@/api/getbrands";
import Padding from "@/components/padding";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { convertTimestampToDate } from "@/utils/convertTimestampToDate";
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
          <Sheet className=" w-full text-start">
            <SheetTrigger className="  w-full text-start">
              <div
                className={clsx(
                  "  grid grid-cols-5 font-Matter gap-6 px-5 py-3.5 ",
                  idx % 2 == 0 ? "bg-[#F9FAFB]" : " bg-white "
                )}
              >
                <div>{idx + 1}</div>
                <div className=" w-full truncate ">{brand?.brand}</div>
                <div className=" w-full truncate  lowercase">
                  {brand?.email}
                </div>
                <div>{brand?.phone}</div>
                <div>{convertTimestampToDate(brand?.updatedAt)}</div>
              </div>
            </SheetTrigger>
            <SheetContent className=" p-6 py-10 z-[5000000000000]">
              <div className=" h-max max-h-full rounded-xl  p-6  border-[1px] border-[#F1F1F1]   flex flex-col gap-5 right-0 top-0  w-full bg-white  ">
                <div className=" flex gap-4 text-[1.1rem] ">
                  <div className=" font-Satoshi font-medium text-[#606061] ">
                    Brand Name :
                  </div>
                  <div className=" font-Matter font-medium   ">
                    {brand.brand}
                  </div>
                </div>
                <div className=" flex gap-4 text-[1.1rem] ">
                  <div className=" font-Satoshi font-medium text-[#606061] ">
                    Owner Name :
                  </div>
                  <div className=" font-Matter font-medium   ">
                    {brand.name}
                  </div>
                </div>
                <div className=" flex gap-4 text-[1.1rem] ">
                  <div className=" font-Satoshi font-medium text-[#606061] ">
                    Email :
                  </div>
                  <div className=" font-Matter font-medium   ">
                    {brand.email}
                  </div>
                </div>
                <div className=" flex gap-4 text-[1.1rem] ">
                  <div className=" font-Satoshi font-medium text-[#606061] ">
                    Phone Number :
                  </div>
                  <div className=" font-Matter font-medium   ">
                    {brand.phone}
                  </div>
                </div>
                <div className=" flex gap-4 text-[1.1rem] ">
                  <div className=" font-Satoshi font-medium text-[#606061] ">
                    Onboarding Date :
                  </div>
                  <div className=" font-Matter font-medium   ">
                    {convertTimestampToDate(brand.updatedAt)}
                  </div>
                </div>
                <div className=" flex gap-4 text-[1.1rem] ">
                  <div className=" font-Satoshi font-medium text-[#606061] ">
                    Description :
                  </div>
                  <div className=" font-Matter font-medium   ">
                    {brand.about}
                  </div>
                </div>
                <div className="  flex flex-col gap-4 text-[1.1rem] ">
                  <div className=" font-Satoshi font-medium text-[#606061] ">
                    Requested Platforms :
                  </div>
                  <div className="   grid-cols-3 grid gap-4 font-Matter font-medium   ">
                    {brand.socials.map((img) => (
                      <div className=" h-full w-full flex gap-1 flex-col justify-center items-center">
                        <img src={`/images/${img}.svg`} alt="" srcset="" />
                        <div className=" text-[0.8rem] ">{img}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </Padding>
  );
};

export default Brands;
