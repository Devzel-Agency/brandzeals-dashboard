import Dashboardnavbar from "@/components/dashboardnavbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className=" flex flex-col relative h-[100svh] xl:h-[100vh] ">
      <Dashboardnavbar />
      <div className=" h-max  flex-grow  w-full pb-20 md:pb-0">{children}</div>
    </div>
  );
};

export default Layout;
