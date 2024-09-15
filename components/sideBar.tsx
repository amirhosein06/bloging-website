'use client'
import { useState,useEffect } from "react";
import { HambergerMenu,ArrowRight,Text,Moon,Sun1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from 'next-themes';

const SideBar = () => {
    const [openSideBar, setopenSideBar] = useState<string>("hidden");
    const { theme, setTheme } = useTheme();
    const fontStatus : string = localStorage.getItem("fontSize") ?? "medium";
    const [fontSize, setfontSize] = useState<string>(fontStatus);

    const setFontStatus = (fontCode : string): void=>{
      localStorage.removeItem("fontSize");
      setfontSize(fontCode);
      localStorage.setItem("fontSize",fontCode);
    }
    useEffect(()=>{
      document.documentElement.style.fontSize = fontStatus === "medium" ? "16px" : "19px";
    },[])

    return ( 
    <>
            <HambergerMenu  className="cursor-pointer" size={32} color={theme === "light" ? "#000" : "#fff"} variant="Broken" onClick={()=>setopenSideBar("block")}/>

            <div className={`dark:bg-black dark:shadow-zinc-800 flex flex-col justify-between  z-[99]  transition-all w-11/12 md:w-1/3 h-full fixed right-0 top-0 pl-4 py-3 bg-white shadow-xl ${openSideBar}`}>
            <div className="w-full h-[12%] flex justify-between items-center">
              <Link href="/dashboard" className="dark:bg-zinc-900 w-3/5 h-[90%] items-center flex pl-4 gap-4 overflow-hidden rounded-xl border cursor-pointer bg-yellow-50 hover:bg-yellow-100 transition-colors">
              <Image className="rounded-full grayscale" height={42} width={42} src={"data:image/jpeg;base64,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"} alt="profile"/>
              <h1 className="text-xl">Dashboard</h1>
              </Link>
              <div className="w-1/5 h-full flex justify-center items-center">
               <ArrowRight size={35} color={theme === "light" ? "#000" : "#fff"} variant="Linear" onClick={()=>setopenSideBar("hidden")} className="cursor-pointer"/>
              </div>
            </div>

            <div className="w-full h-3/6 md:h-4/6 pl-4">
                <ul className="w-full h-full flex flex-col justify-between md:gap-14 md:justify-center">
                   {[['Home','/'],['Search','/search'],['Categories','/categories'],['Contact Us','https://www.linkedin.com/in/amirhosein-zolfaghari06/']].map((item,index)=>(
                    <li key={index}><Link href={item[1]} className="text-3xl md:text-xl hover:pl-2 transition-all">{item[0]}</Link></li>
                   ))} 
                </ul>
            </div>

            <div className="w-full h-1/6 flex items-center justify-center gap-16">
            <div className="cursor-pointer *:flex *:gap-3 *:select-none">
            {fontSize === "medium" ? (
                <div onClick={()=>{setFontStatus("large");document.documentElement.style.fontSize = "19px"}}><Text size="28" color={theme === "light" ? "#000" : "#fff"}/> Large</div>
              ) : (
                <div onClick={()=>{setFontStatus("medium");document.documentElement.style.fontSize = "16px"}}><Text size="24" color={theme === "light" ? "#000" : "#fff"}/> Medium</div>
              )}
            </div>
            <span className="w-[0.1rem] bg-black h-1/3 dark:bg-white"></span>
            <div className="cursor-pointer *:flex *:gap-2 *:select-none">
              {theme === "light" ? (
                <div onClick={()=>{setTheme("dark")}}><Moon size="24" color={theme === "light" ? "#000" : "#fff"}/> Dark</div>
              ) : (
                <div onClick={()=>{setTheme("light")}}><Sun1 size="24" color={theme === "light" ? "#000" : "#fff"}/> Light</div>
              )}
            </div>
            </div>

            </div>
    </>
    );
}
 
export default SideBar;