import React from "react";

export default function Content(props) {

  return <>

    <div className="flex flex-wrap justify-center items-center text-white p-3">

        {props.children}

    </div>

  </>

}

