import React from "react";

export default function Area(props) {
  return <>
        <div className="flex flex-col justify-center items-center bg-black border border-gray-500 rounded-lg w-full sm:w-5/6">

          {props.children}
        
        </div>
  </>
}

