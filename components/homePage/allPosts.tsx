import Image from "next/image";
import Link from "next/link";
import { Clock,ArrowRight2 } from "iconsax-react";
import { postType } from "@/app/api/route";



const LataestPosts = async () => {
    const getdata = async ()=>{
        const response = await fetch('http://localhost:3000/api/',{cache: "no-store"});
        return response.json();
    }
    const alldata : postType[] = await getdata();
    const data = alldata.splice(1,);

    return ( 
        <div className="w-full">
          <h1 className="w-full h-14 flex items-center pl-3 text-2xl font-medium mb-4">Latest Posts</h1>
          <div className="w-full grid grid-cols-3 gap-5">
            {data.map((item : postType,index : number)=>(
                <div key={index} className="col-span-1 row-span-1 h-96 px-4 py-5 border shadow rounded-2xl flex flex-col items-center gap-2 dark:border-zinc-900">
                    <div className="w-full h-[8%] flex items-center justify-between">
                      <span className="text-sm px-2 rounded border-zinc-500 dark:border-text-zinc-400 dark:text-zinc-400 border text-zinc-700 flex justify-center items-center cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-950 transition-colors">{item.category}</span>
                      <span className="text-sm flex items-center gap-2 text-zinc-700 dark:text-zinc-400"><Clock size="15" className=" text-zinc-700 dark:text-zinc-400"/>{item.date}</span>
                    </div>
                    <div className="w-full h-4/6 flex justify-center items-center overflow-hidden rounded-xl z-50 m-3">
                        <Image alt={item.title} src={item.img} sizes="100vw" height={0} width={0} style={{width: "100%",height: "auto"}} loading="lazy"/>
                        </div>
                    <h1 className="flex items-center capitalize h-[15%] w-full text-3xl font-medium text-ellipsis overflow-hidden whitespace-nowrap">{item.title}</h1>
                    <div className="h-[6%] w-full flex justify-start">
                    <Link href={`/${item.id}`} className="hover:pl-1 transition-all text-sm flex items-center text-sky-700">see more <ArrowRight2 size="14" className=" text-sky-700"/></Link>
                    </div>
                </div>
            ))}
          </div>
        </div>
     );
}
 
export default LataestPosts;