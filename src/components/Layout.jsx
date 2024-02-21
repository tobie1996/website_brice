import React from 'react'
import Button from "../layouts/Button";

const Layout = ({titre,description}) => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.jpg')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
         {titre}
          
        </h1>
        <p>
          {description}
          
        </p>

        <Button title="See Services" />
      </div>
    </div>
  )
}

export default Layout