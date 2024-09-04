import Image from "next/image";
import Link from "next/link";
import { Clock,ArrowRight2 } from "iconsax-react";
import { postType } from "@/postTyping";


const SuggestedPost = ({data} : {data : postType}) => {
   

    
    return ( 
        <div className="w-full h-96 flex items-center py-5">
            <div className="w-1/2 px-6 h-full">
                <div className="w-full h-full flex justify-center items-center overflow-hidden rounded-2xl z-50">
                    <Image alt={data.title} src={data.img} sizes="100vw" height={0} width={0} style={{width: "100%",height: "auto"}}/>
                </div>
            </div>
            <div className="w-1/2 h-full pl-4">
                <div className="w-full h-1/6 flex justify-between items-center pr-6">
                   <span className=" px-2 rounded border-zinc-700 dark:border-text-zinc-400 dark:text-zinc-400 border text-zinc-700 flex justify-center items-center cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-950 transition-colors">{data.category}</span>
                   <span className="flex items-center gap-2 text-zinc-700 dark:text-zinc-400"><Clock size="19" className=" text-zinc-700 dark:text-zinc-400"/>{data.date}</span>
                </div>
                <h1 className="w-full h-1/6 flex items-center text-5xl capitalize font-medium  text-ellipsis overflow-hidden whitespace-nowrap">{data.title}</h1>
                <p className="w-full h-3/6 text-zinc-800 dark:text-zinc-500 text-ellipsis overflow-hidden pt-3 pr-4">{data.article[0].content}</p>
                <div className="w-full h-1/6 flex items-center text-sky-700"><Link href={`/posts/${data.id}`} className="flex items-center">see more <ArrowRight2 size="20" className=" text-sky-700"/></Link></div>
            </div>
        </div>
     );
}
 
export default SuggestedPost;