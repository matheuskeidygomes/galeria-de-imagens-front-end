import React from "react";

export default function ViewOne(props) {

    return <>

        <div className="flex flex-col justify-center items-center w-full">

            <div className="border-2 border-gray-600 rounded w-11/12 m-3">

                <img className="w-full" src={props.link} alt={props.title} />

            </div>

            <div className="flex">

                <a href="/" className="transition hover:-translate-y-1 bg-gray-800 text-white font-bold m-5 p-3 rounded-lg">Voltar</a>
                <button className="transition hover:-translate-y-1 bg-red-600 text-white font-bold m-5 p-3 rounded-lg" onClick={props.onClick}>Deletar</button>

            </div>

        </div>

    </>
}