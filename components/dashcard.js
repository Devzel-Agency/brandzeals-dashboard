import React from "react";

const Dashcard = ({ heading, no, tag }) => {
  return (
    <div className="  rounded-xl w-full bg-[#ffffff] border-[#E5EAF0] border flex justify-between p-5 py-8 ">
      <div className=" flex flex-col justify-between ">
        <div className=" text-[#2F3B50] font-Satoshi font-semibold  text-[2rem] md:text-[2.25rem] xl:text-[2.5rem] ">
          {heading}
        </div>
        <div className=" pt-3 ">
          <div className=" font-Matter text-[#111314] leading-none font-semibold text-[3rem] md:text-[4rem] xl:text-[5rem] ">
            {no}{" "}
            <span className=" text-[#717678] text-[0.9rem] font-normal ">
              {tag}{" "}
            </span>
          </div>
        </div>
      </div>
      <div className=" text-[#5B5E63] place-self-end text-[0.9rem] font-Matter font-medium ">
        View Details
      </div>
    </div>
  );
};

export default Dashcard;
