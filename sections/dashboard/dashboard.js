"use client"
import getDashboarddata from '@/api/getDashboardData'
import Dashcard from '@/components/dashcard'
import Padding from '@/components/padding'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [data,setdata]=useState()
    const [loading,setloading]=useState()
    useEffect(()=>{
        const getdata=async()=>{
            const data=await getDashboarddata()
            if(!data){
                return
            }
            console.log(data);
            setdata(data)
        }
        getdata()
    },[])
    return (
        <div className=' py-10 '>
            <Padding>
                <div className=' lg:flex  gap-5 ' >
                    <div className=' grid gap-5 lg:w-[45%] xl:w-[35%] '>
                        <Dashcard heading={"Total Influncer"} no={data?.onboardinfluencer} tag={"Influencers onboarded"}/>
                        <Dashcard heading={"Total Brands"} no={data?.onboardbrands} tag={"Brands onboarded"}  />
                    </div>
                    <div className=' lg:w-[55%] xl:w-[65%] '>
                        Graph
                    </div>
                </div>
                <div>
                    <div className=' flex justify-between py-4 pt-10 text-[1.5rem] font-Satoshi  font-bold  '>Recent Brands <div className=' font-Matter  font-medium cursor-pointer text-[0.9rem] '>View all</div> 
                    </div>
                    <div className=' bg-[#FFFFFF]  border-[#F1F1F1] border rounded-xl '>
                        <div className=' grid grid-cols-6 px-5 py-3.5 '>
                            <div>S.No</div>
                            <div>Name</div>
                            <div>Email</div>
                            <div>Brand Name</div>
                            <div>Phone Number</div>
                            <div>Date</div>
                        </div>

                        <div className=' bg-[#F9FAFB] grid grid-cols-6 px-5 py-3.5 '>
                            <div>1</div>
                            <div>Abdul Aziz</div>
                            <div className=' w-full truncate  lowercase'>Mohammed@gmail.com</div>
                            <div>Abdul Aziz </div>
                            <div>7794966120</div>
                            <div>24/2/2024</div>
                        </div>
                    </div>
                </div>
            </Padding>
        </div>
    )
}

export default Dashboard