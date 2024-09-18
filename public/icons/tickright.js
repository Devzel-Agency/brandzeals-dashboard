import React from "react";

const Tickright = ({size}) => {
  return (
    <div>
      <svg
        width={size ? size : 20}
        height={size ? size : 20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 10L7.99529 14L16 6"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Tickright;