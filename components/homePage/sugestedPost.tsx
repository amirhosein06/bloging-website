import Image from "next/image";
import Link from "next/link";
import { Clock,ArrowRight2 } from "iconsax-react";
import { postType } from "@/postTyping";


const SuggestedPost = ({data} : {data : postType}) => {
   

    
    return ( 
        <div className="w-full h-[29rem] lg:h-96 flex flex-col lg:flex-row items-center py-2 lg:py-5 gap-1 lg:gap-0 px-2 lg:px-0">
            <div className="w-full h-1/3 lg:w-1/2 px-1 lg:px-6 lg:h-full">
                <div className="w-full h-full flex justify-center items-center overflow-hidden rounded-2xl z-50">
                    <Image alt={data.title} src={data.img} sizes="100vw" height={0} width={0} style={{width: "100%",height: "auto"}}/>
                </div>
            </div>
            <div className="w-full h-2/3 lg:w-1/2 lg:h-full lg:pl-4">
                <div className="w-full h-[8%] lg:h-1/6 flex justify-between items-center lg:pr-6 px-4 lg:px-0">
                   <Link  href={`/categories/${data.category}`} className="lg:text-base text-xs px-2 rounded border-zinc-700 dark:border-text-zinc-400 dark:text-zinc-400 border text-zinc-700 flex justify-center items-center cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-950 transition-colors">{data.category}</Link>
                   <span className="lg:text-base text-xs flex items-center gap-2 text-zinc-700 dark:text-zinc-400"><Clock size="19" className=" text-zinc-700 dark:text-zinc-400"/>{data.date}</span>
                </div>
                <h1 className="w-full h-1/6 lg:justify-start justify-center flex items-center text-3xl lg:text-5xl capitalize font-medium  text-ellipsis overflow-hidden whitespace-nowrap">{data.title}</h1>
                <p className="w-full px-3 lg:pl-0 py-1 lg:pb-0 flex justify-center lg:justify-start lg:h-3/6 h-4/6 lg:text-base text-xs text-zinc-800 dark:text-zinc-500 text-ellipsis overflow-hidden lg:pt-3 lg:pr-4">{data.article[0].content}</p>
                <div className="w-full h-[10%] lg:h-1/6 flex items-center text-sky-700 lg:pl-0 pl-3"><Link href={`/posts/${data.id}`} className="flex items-center lg:text-base text-sm">see more <ArrowRight2 size="20" className=" text-sky-700"/></Link></div>
            </div>
        </div>
     );
}
 
export default SuggestedPost;