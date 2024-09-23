"use client";
import getDashboarddata from "@/api/getDashboardData";
import Dashcard from "@/components/dashcard";
import Graph from "@/components/graph";
import Padding from "@/components/padding";
import SingleBrand from "@/components/SingleBrand";
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
              <div
                className={clsx(
                  "  grid grid-cols-5 font-Matter gap-6 px-5 py-3.5 ",
                  idx % 2 == 0 ? "bg-[#F9FAFB]" : " bg-white "
                )}
              >
                <div>{idx + 1}</div>
                <div>{brand?.brand}</div>
                <div className=" w-full truncate  lowercase">
                  {brand?.email}
                </div>
                <div>{brand?.phone}</div>
                <div>{convertTimestampToDate(brand?.createdAt)}</div>
              </div>
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
              <div
                className={clsx(
                  "  grid grid-cols-5 font-Matter gap-6 px-5 py-3.5 ",
                  idx % 2 == 0 ? "bg-[#F9FAFB]" : " bg-white "
                )}
              >
                <div>{idx + 1}</div>
                <div>{brand?.name}</div>
                <div className=" w-full truncate  lowercase">
                  {brand?.email}
                </div>

                <div>{brand?.phone}</div>
                <div>{convertTimestampToDate(brand?.createdAt)}</div>
              </div>
            ))}
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Dashboard;
