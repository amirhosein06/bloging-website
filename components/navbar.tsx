import { SearchNormal1 } from "iconsax-react";
import SideBar from "./sideBar";
import { Edu_VIC_WA_NT_Beginner } from "next/font/google";
import Link from "next/link";

const caesar_Dressing = Edu_VIC_WA_NT_Beginner({ subsets: ["latin"], weight: "500"});

const Navbar = () => {
    return ( 
        <div className="w-full h-16 px-7 py-4 flex items-center sticky top-0 left-0 bg-white dark:bg-black z-[98] shadow dark:shadow-zinc-900">
            <div className="w-1/2">
                <Link href="/"><h1 className={`${caesar_Dressing.className} text-2xl text`}>AzBLOG</h1></Link>
            </div>
            <div className="w-1/2 h-full flex items-center justify-end gap-7">
            <Link href="/search"><SearchNormal1 size={23} variant="Linear" className="cursor-pointer text-black dark:text-white"/></Link>
            <SideBar />
            </div>
        </div>
     );
}
 
export default Navbar;