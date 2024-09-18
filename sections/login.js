"use client";
import Userlogin from "@/api/userlogin";
import { useToast } from "@/hooks/use-toast";
import Eye from "@/public/icons/eye";
import Eyeslash from "@/public/icons/eyelash";
import Tickright from "@/public/icons/tickright";
import { useUser } from "@/redux/usercontext";
import { clsx } from "clsx";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Signin = () => {
  const { dispatch, state } = useUser();
  const user = state.user;
  const [showPassword, setshowPassword] = useState(false);
  const [active, setactive] = useState(false);
  const [active1, setactive1] = useState(false);
  const [Remember, setRemember] = useState(false);
  const [pageLoading, setpageLoading] = useState(true);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const [error, seterror] = useState();
  const [loading, setloading] = useState();
  const router = useRouter();
  const { toast } = useToast()

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token && user) {
      router.push("/dashboard");
    }
    if (user) {

      emailRef?.current?.focus();
    }
  }, [user]);

  const handleEmailKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      passwordRef.current.focus();
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!user && !token) {
      setpageLoading(false);
    }
  }, [user])
  const verify = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast({
        variant: "destructive",
        title: <div className=" text-[1.1rem] ">Oops!</div>,
        description: (
          <div className=" text-[1rem] font-Matter pt-1 ">
            Email is Required
          </div>
        ),
      });
    } else if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: <div className=" text-[1.1rem] ">Oops!</div>,
        description: (
          <div className=" text-[1rem] font-Matter pt-1 ">
            Invalid email format
          </div>
        ),
      });
    } else if (!password) {
      toast({
        variant: "destructive",
        title: <div className=" text-[1.1rem] ">Oops!</div>,
        description: (
          <div className=" text-[1rem] font-Matter pt-1 ">
            Password is required
          </div>
        ),
      });
      // seterror("password is required");
    } else {
      signin();
    }
  };

  const signin = async () => {
    if (!loading) {
      setloading(true);
      const res = await Userlogin(email, password);
      console.log(res, "login??");

      if (res.error) {
        console.log(res.error);
        toast({
          variant: "destructive",
          title: <div className=" text-[1.1rem] ">Oops!</div>,
          description: (
            <div className=" text-[1rem] font-Matter pt-1 ">{res.error}</div>
          ),
        });
        setloading(false);

      } else {
        if (Remember) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
        }
        await dispatch({ type: "SET_USER", payload: res });

        router.push("/dashboard");
      }
    }
  };
  if (pageLoading) {
    return (
      <div className=" h-[100vh] w-[100vw] flex justify-center  items-center">
        <div className=" loader-line" />
      </div>
    )
  }

  return (
    <div className="bg-[#F9F9F9] flex justify-center   h-[100vh] relative">
      <div className="flex h-full justify-center items-center">
        <div className="bg-[#FFFFFF] border-[#F2F2F2] w-[300px] md:w-[400px] border-[1px] rounded-[30px] p-[1rem] h-max z-10">
          <div className="text-[#00664E] flex justify-center text-[2rem] font-Satoshi font-bold pb-5">
           Brandzeals
          </div>
          
          <div className="text-[#262626] font-satoshi text-[1rem] font-[500] pb-2">
            E-mail
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
            onKeyDown={(e) => handleEmailKeyPress(e)}
            onClick={() => setactive(true)}
            onBlur={() => setactive(false)}
            className={clsx("text-[#1d1d1e] w-full select-none mb-4 text-[16px]  rounded-[0.8rem] outline-none placeholder:text-[14px]  bg-[#F9F9F9] font-manrope py-3 px-[1rem] duration-200", active ? "border-[1px] border-[#474747]  duration-200" : "border-[1px] border-[#F1F1F1]  duration-200")}
            placeholder="Enter your email"
          />
          <div className="text-[#262626] font-satoshi text-[1rem] font-[500] pt-2">
            Password
            <div className="relative pt-2">
              <div className=" flex relative justify-end  items-center">
                <input
                  ref={passwordRef}
                  type={showPassword ? "text" : "password"}
                  className={clsx("text-[#1d1d1e] w-full select-none mb-4 text-[16px]  rounded-[0.8rem] outline-none placeholder:text-[14px]  bg-[#F9F9F9] font-manrope py-3 px-[1rem] duration-200", active1 ? "border-[1px] border-[#474747]  duration-200" : "border-[1px] border-[#F1F1F1]  duration-200")}
                  placeholder="Set a password"
                  onClick={() => setactive1(true)}
                  onBlur={() => setactive1(false)}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && signin()}
                />
                <div
                  onClick={() => setshowPassword(!showPassword)}
                  className="absolute top-3.5 px-3  w-max cursor-pointer"
                >
                  {showPassword ? <Eye /> : <Eyeslash />}
                </div>
              </div>
            </div>
            {/* <div className="h-4 mt-1">
            {error.password && (
              <span className="text-red-400 text-[0.9rem]">
                {error.password}
              </span>
            )}
          </div> */}
          </div>
          <div
            onClick={() => setRemember(!Remember)}
            className=" cursor-pointer flex items-center gap-2 pt-3 pb-8"
          >
            <div
              className={`border-[#D7D7D7] ${Remember ? "bg-[#333333]" : ""
                } flex justify-center items-center  border-[1px] h-[18px] w-[18px] rounded-[4px] `}
            >
              {Remember && <Tickright size={15}/>}
            </div>
            <div className="text-[#54565B] font-manrope font-medium select-none text-[0.86rem] ">
              Remember me 
            </div>
            
          </div>
          {error && <div className="text-[red]">{error}</div>}
          <div
            onClick={() => verify()}
            className="bg-[#26272A] cursor-pointer w-full  h-[3.2rem] flex justify-center items-center rounded-[0.8rem] text-[#FFFFFF] text-[1rem]"
          >
            {loading ? <div className="loader h-[1rem]"></div> : "Next"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;