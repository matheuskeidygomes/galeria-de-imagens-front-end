import React from "react";

export default function ImageItem(props) {

    return <>

        <div className="flex flex-col justify-center text-center items-center bg-neutral-900 border border-gray-800 rounded-lg p-2 m-2 w-full sm:w-44 md:w-48 lg:w-56   ">

            <h1 className="mb-3 font-bold text-lg"> {props.title} </h1>

            <img className=" h-44 w-56 mb-3 border border-gray-600 rounded" src={props.link} alt="" />

            <a className="transition font-bold hover:-translate-y-1 bg-gray-800 p-2 rounded-lg" href={`/images/${props.id}`}> Ver foto </a>

        </div>

    </>

}

