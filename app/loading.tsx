"use client"
import { ChartCircle } from "iconsax-react";
const Loading = () => {
    return ( 
        <div className="w-full h-[30rem] flex justify-center items-center text-4xl gap-5">
            Loading... <ChartCircle size="45" className="animate-spin text-block dark:text-white"/>
        </div>
     );
}
 
export default Loading;