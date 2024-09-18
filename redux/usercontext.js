// UserContext.js
"use client";
import { getCurrentUserDetails } from "@/api/getuserdetails";

import React, { createContext, useContext, useEffect, useReducer } from "react";
const UserContext = createContext();
export const useUser = () => useContext(UserContext);
const initialState = {
  user: null,
};
const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log("Setting user:", action.payload);
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  useEffect(() => {
    // const token = localStorage.getItem("token");
    const token = localStorage.getItem("Token");

    console.log(token)
    // Define an async function inside useEffect
    const fetchUserData = async () => {
      if (token) {
        try {
          const data = await getCurrentUserDetails(token); // Use await with getuser
          console.log(data, "dfsssssssssss");
          dispatch({ type: "SET_USER", payload: data });
          console.log(dispatch, "dispatch");
        } catch (error) { }
      }
      else {

        // window.location.href = "/";

      }
    };
    // Call the async function
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};