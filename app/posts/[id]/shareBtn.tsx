'use client'
import { Share } from "iconsax-react";
import { useState } from "react";

const ShareBtn = () => {
    const [btnContent, setbtnContent] = useState<any>(<Share size="22" className="text-black dark:text-white"/>);
    const copyToShare = ()=>{
        const thisPageURL : string = window.location.href;
        navigator.clipboard.writeText(thisPageURL);
        setbtnContent("Link copied !");
        setTimeout(() => {
           setbtnContent(<Share size="22" className="text-black dark:text-white"/>);
        }, 1500);
    }
    return ( 
        <button title="Share" onClick={copyToShare}>{btnContent}</button>
     );
}
 
export default ShareBtn;