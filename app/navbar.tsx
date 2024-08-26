import { SearchNormal1 } from "iconsax-react";
import SideBar from "./sideBar";
import { Edu_VIC_WA_NT_Beginner } from "next/font/google";

const caesar_Dressing = Edu_VIC_WA_NT_Beginner({ subsets: ["latin"], weight: "500"});

const Navbar = () => {
    return ( 
        <div className="w-full h-16 px-7 py-4 flex items-center sticky top-0 left-0 bg-white dark:bg-black">
            <div className="w-1/2">
                <h1 className={`${caesar_Dressing.className} text-2xl text`}>AzBLOG</h1>
            </div>
            <div className="w-1/2 h-full flex items-center justify-end gap-7">
            <SearchNormal1 size={23} color="#000" variant="Linear" className="cursor-pointer"/>
            <SideBar />
            </div>
        </div>
     );
}
 
export default Navbar;