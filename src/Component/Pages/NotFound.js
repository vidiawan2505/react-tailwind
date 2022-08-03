import React from "react";
import { Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
    return ( 
        <div className="w-full bg-white py-14 px-4 mx-auto text-center flex">
            <div className="max-w-[1000px] mx-auto grid md:grid-cols-2">
                <div className="flex flex-col items-center">
                    <TbError404 size={150}/>
                </div>
                <div className="flex flex-col justify-center ">

                    <h1 className="md:text-4xl sm:text3xl text-2xl font-bold py-4 text-red-500">404 PAGE NOT FOUND</h1>
                    <p>
                    The page you are looking for might have been removed or had its name changed or is temporarily unavailable.
                    </p>
                    <button className=' bg-black text-[#00df9a] w-[200px] self-center rounded-md font-medium my-5 mx-auto md:mx-0 py-3'><Link to={'/'}>HOMEPAGE</Link></button>
                </div>
            </div>
        </div>
     );
}
 
export default NotFound;