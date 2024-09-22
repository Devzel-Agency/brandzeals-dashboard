import React from "react";
import Padding from "./padding";

const SingleBrand = () => {
  return (
    <div className=" py-16 px-6 fixed flex flex-col gap-5 right-0 top-0 w-[30rem] bg-white z-[10000] h-full ">
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
  );
};

export default SingleBrand;
