import { SearchNormal1 } from "iconsax-react";
import SideBar from "./sideBar";

const Navbar = () => {
    return ( 
        <div className="w-full h-16 px-7 py-4 flex items-center sticky top-0 left-0 bg-white">
            <div className="w-1/2">
                logo
            </div>
            <div className="w-1/2 h-full flex items-center justify-end gap-7">
            <SearchNormal1 size={23} color="#000" variant="Broken" className="cursor-pointer"/>
            <SideBar />
            </div>
        </div>
     );
}
 
export default Navbar;