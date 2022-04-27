import React from "react";

export default function Input(props) {
  return <>

    <form className="flex flex-col md:flex-row p-5" onSubmit={props.onSubmit}>
      
      <input className="mr-3 rounded-lg p-1 mb-3 md:mb-0 focus:outline-0" value={props.title} onChange={props.onChange} maxLength="20" placeholder="Título (Max 20 caracteres)" type="text"/>
      <input className="text-white font-bold w-full " ref={props.fileField} type="file" />
      <input className="bg-gray-300 rounded-lg p-1 font-bold mt-3 md:mt-0 md:ml-3 cursor-pointer" type="submit" value="Enviar"/>

    </form>

  </>
}

