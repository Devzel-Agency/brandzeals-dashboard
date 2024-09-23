"use client";
import getDashboarddata from "@/api/getDashboardData";
import Dashcard from "@/components/dashcard";
import Graph from "@/components/graph";
import Padding from "@/components/padding";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { convertTimestampToDate } from "@/utils/convertTimestampToDate";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setdata] = useState();
  const [loading, setloading] = useState();
  useEffect(() => {
    const getdata = async () => {
      const data = await getDashboarddata();
      if (!data) {
        return;
      }
      console.log(data);
      setdata(data);
    };
    getdata();
  }, []);
  return (
    <div className=" py-10  bg-[#FBFBFB]">
      <Padding>
        <div className=" lg:flex  gap-5 ">
          <div className=" grid gap-5 lg:w-[45%] xl:w-[35%] ">
            <Dashcard
              heading={"Total Influncer"}
              no={data?.onboardinfluencer}
              tag={"Influencers onboarded"}
            />
            <Dashcard
              heading={"Total Brands"}
              no={data?.onboardbrands}
              tag={"Brands onboarded"}
            />
          </div>
          {data?.chartData && (
            <div className=" lg:w-[55%] xl:w-[65%] ">
              <Graph chartData={data?.chartData} />
            </div>
          )}
        </div>
        <div>
          <div className=" flex justify-between py-4 pt-10 text-[1.5rem] font-Satoshi  font-bold  ">
            Recent Brands{" "}
            <div className=" font-Matter  font-medium cursor-pointer text-[0.9rem] ">
              <Link href={"/dashboard/brands"}>View all</Link>
            </div>
          </div>
          <div className=" bg-[#FFFFFF]  border-[#F1F1F1] border rounded-xl ">
            <div className=" font-Matter font-medium grid grid-cols-5 gap-6 px-5 py-3.5 ">
              <div>S.No</div>
              <div>Name</div>
              <div>Email</div>
              <div>Phone Number</div>
              <div>Date</div>
            </div>
            {data?.recentbrands?.map((brand, idx) => (
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
                        {brand?.brand}
                      </div>
                    </div>
                    <div className=" flex gap-4 text-[1.1rem] ">
                      <div className=" font-Satoshi font-medium text-[#606061] ">
                        Owner Name :
                      </div>
                      <div className=" font-Matter font-medium   ">
                        {brand?.name}
                      </div>
                    </div>
                    <div className=" flex gap-4 text-[1.1rem] ">
                      <div className=" font-Satoshi font-medium text-[#606061] ">
                        Email :
                      </div>
                      <div className=" font-Matter font-medium   ">
                        {brand?.email}
                      </div>
                    </div>
                    <div className=" flex gap-4 text-[1.1rem] ">
                      <div className=" font-Satoshi font-medium text-[#606061] ">
                        Phone Number :
                      </div>
                      <div className=" font-Matter font-medium   ">
                        {brand?.phone}
                      </div>
                    </div>
                    <div className=" flex gap-4 text-[1.1rem] ">
                      <div className=" font-Satoshi font-medium text-[#606061] ">
                        Onboarding Date :
                      </div>
                      <div className=" font-Matter font-medium   ">
                        {convertTimestampToDate(brand?.updatedAt)}
                      </div>
                    </div>
                    <div className=" flex gap-4 text-[1.1rem] ">
                      <div className=" font-Satoshi font-medium text-[#606061] ">
                        Description :
                      </div>
                      <div className=" font-Matter font-medium   ">
                        {brand?.about}
                      </div>
                    </div>
                    <div className="  flex flex-col gap-4 text-[1.1rem] ">
                      <div className=" font-Satoshi font-medium text-[#606061] ">
                        Requested Platforms :
                      </div>
                      <div className="   grid-cols-3 grid gap-4 font-Matter font-medium   ">
                        {brand?.socials.map((img) => (
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
        </div>
        <div>
          <div className=" flex justify-between py-4 pt-20 text-[1.5rem] font-Satoshi  font-bold  ">
            Recent Influencers
            <div className=" font-Matter  font-medium cursor-pointer text-[0.9rem] ">
              <Link href={"/dashboard/influencers"}>View all</Link>
            </div>
          </div>
          <div className=" bg-[#FFFFFF]  border-[#F1F1F1] border rounded-xl ">
            <div className=" font-Matter font-medium grid grid-cols-5 gap-6 px-5 py-3.5 ">
              <div>S.No</div>
              <div>Name</div>
              <div>Email</div>

              <div>Phone Number</div>
              <div>Date</div>
            </div>
            {data?.recentinfluencers?.map((brand, idx) => (
              <Sheet className=" w-full text-start">
                <SheetTrigger className="  w-full text-start">
                  <div
                    className={clsx(
                      "  grid grid-cols-5 font-Matter gap-6 px-5 py-3.5 ",
                      idx % 2 == 0 ? "bg-[#F9FAFB]" : " bg-white "
                    )}
                  >
                    <div>{idx + 1}</div>
                    <div className=" w-full truncate ">{brand?.name}</div>
                    <div className=" w-full truncate  lowercase">
                      {brand?.email}
                    </div>
                    <div>{brand?.phone}</div>
                    <div>{convertTimestampToDate(brand?.createdAt)}</div>
                  </div>
                </SheetTrigger>
                <SheetContent className=" p-6 py-10 z-[5000000000000]">
                  <div className=" h-max max-h-full rounded-xl  p-6  border-[1px] border-[#F1F1F1]   flex flex-col gap-5 right-0 top-0  w-full bg-white  ">
                    <div className=" flex gap-4 text-[1.1rem] ">
                      <div className=" font-Satoshi font-medium text-[#606061] ">
                        Name :
                      </div>
                      <div className=" font-Matter font-medium   ">
                        {brand?.name}
                        <span className="  text-gray-500 font-normal text-[0.9rem]">
                          {" "}
                          ( Aka {brand?.userName})
                        </span>
                      </div>
                    </div>

                    <div className=" flex gap-4 text-[1.1rem] ">
                      <div className=" font-Satoshi font-medium text-[#606061] ">
                        Email :
                      </div>
                      <div className=" font-Matter font-medium   ">
                        {brand?.email}
                      </div>
                    </div>
                    <div className=" flex gap-4 text-[1.1rem] ">
                      <div className=" font-Satoshi font-medium text-[#606061] ">
                        Phone Number :
                      </div>
                      <div className=" font-Matter font-medium   ">
                        {brand?.phone}
                      </div>
                    </div>
                    <div className=" flex gap-4 text-[1.1rem] ">
                      <div className=" font-Satoshi font-medium text-[#606061] ">
                        Onboarding Date :
                      </div>
                      <div className=" font-Matter font-medium   ">
                        {convertTimestampToDate(brand?.updatedAt)}
                      </div>
                    </div>
                    <div className=" flex gap-4 text-[1.1rem] ">
                      <div className=" font-Satoshi font-medium text-[#606061] ">
                        Description :
                      </div>
                      <div className=" font-Matter font-medium   ">
                        {brand?.about}
                      </div>
                    </div>
                    <div className="  flex flex-col gap-4 text-[1.1rem] ">
                      <div className=" font-Satoshi font-medium text-[#606061] ">
                        Platforms :
                      </div>
                      <div className="   grid-cols-3 grid gap-4 font-Matter font-medium   ">
                        {brand?.socials.map((img) => (
                          <div className=" h-full w-full flex gap-1 flex-col justify-center items-center">
                            <img
                              src={`/images/${img.name}.svg`}
                              alt=""
                              srcset=""
                            />
                            <div className=" text-[0.8rem] ">{img.name}</div>
                            <div className=" text-[0.8rem] ">
                              {img.followers / 1000}k
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            ))}
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Dashboard;
