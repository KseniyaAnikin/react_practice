import React, { useState } from "react";

export function CreateProduct(){

  // const [value, setValue] = useState('');

  const submitHandler = (event: React.FormEvent) =>{
    event.preventDefault()
  }

  // const changeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   setValue(e.target.value)
  // }

  return(
    <form onSubmit={ submitHandler }>
      <input
       type="text"
       className="border px-4 py-2 mb-2 w-full outline-0"
       placeholder="Enter product title..."
      //  value = {value}
       />
       <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
    </form>
  )
}