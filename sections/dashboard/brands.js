"use client";
import getbrands from "@/api/getbrands";
import Padding from "@/components/padding";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
                <div className=" w-full truncate  lowercase">{brand?.email}</div>
                <div>{brand?.phone}</div>
                <div>{brand?.createdAt}</div>
              </div>
            </SheetTrigger>
            <SheetContent className=" z-[5000000000000]">
              <div className=" py-16 px-6  flex flex-col gap-5 right-0 top-0  w-full bg-white  h-full ">
                <div className=" flex gap-4 text-[1.1rem] ">
                  <div className=" font-Satoshi font-medium text-[#606061] ">
                    Brand Name :
                  </div>
                  <div className=" font-Matter font-medium   ">Brandzeals</div>
                </div>
                <div className=" flex gap-4 text-[1.1rem] ">
                  <div className=" font-Satoshi font-medium text-[#606061] ">Email :</div>
                  <div className=" font-Matter font-medium   ">
                    mohammedb4u2@gmail.com
                  </div>
                </div>
                <div className=" flex gap-4 text-[1.1rem] ">
                  <div className=" font-Satoshi font-medium text-[#606061] ">
                    Phone Number :
                  </div>
                  <div className=" font-Matter font-medium   ">+91 7794966120</div>
                </div>
                <div className=" flex gap-4 text-[1.1rem] ">
                  <div className=" font-Satoshi font-medium text-[#606061] ">
                    Onboarding Date :
                  </div>
                  <div className=" font-Matter font-medium   ">23/9/10</div>
                </div>
                <div className=" flex gap-4 text-[1.1rem] ">
                  <div className=" font-Satoshi font-medium text-[#606061] ">
                    Person Incharge
                  </div>
                  <div className=" font-Matter font-medium   ">Mustafa</div>
                </div>
                <div className=" flex gap-4 text-[1.1rem] ">
                  <div className=" font-Satoshi font-medium text-[#606061] ">
                    Platforms :
                  </div>
                  <div className=" font-Matter font-medium   ">Platforms</div>
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
