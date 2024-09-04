import { postType } from "@/postTyping";
import Image from "next/image";
import Link from "next/link";
import ShareBtn from "./shareBtn";
import { ArrowLeft,Clock,User } from "iconsax-react";

const SinglePost = async ({params}:{params : {id : string}}) => {
    const getdata = async ()=>{
        const response = await fetch(`https://az-blog-api.vercel.app/posts/${params.id}`);
        return response.json();
    }
    const data : postType = await getdata();

    return ( 
        <div className="w-3/4 mx-auto bg-white shadow dark:bg-black dark:shadow-zinc-700">
            <div className="w-full h-72 overflow-hidden flex justify-center items-center">
            <Image alt={data.title} src={data.img} sizes="100vw" height={0} width={0} style={{width: "100%",height: "auto"}}/>
            </div>
            <div className="w-full flex flex-col items-center px-10 mt-4">
                <div className="w-full flex items-center justify-between h-10">
                    <Link href="/" className="flex items-center justify-center gap-2"><ArrowLeft size="20" className="text-black dark:text-white"/>back</Link>
                    <span className="flex items-center justify-center gap-2"><span className=" px-2 rounded border-zinc-700 dark:border-text-zinc-400 dark:text-zinc-400 border text-zinc-700 flex justify-center items-center cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-950 transition-colors">{data.category}</span><ShareBtn/></span>
                </div>
                <div className="w-full h-20 grid grid-cols-5 grid-rows-3 my-5">
                    <h1 className="row-span-3 col-start-1 col-span-4 flex items-center capitalize text-5xl">{data.title}</h1>
                    <span className="col-start-5 col-span-1 row-start-1 row-span-1 flex justify-end text-zinc-500 dark:text-zinc-800 items-center gap-1"><Clock size="19" className="text-zinc-500 dark:text-zinc-800"/>{data.date}</span>
                    <span className="col-start-5 col-span-1 row-start-2 row-span-1 flex justify-end text-zinc-500 dark:text-zinc-800">Read time : {data.readTime}m</span>
                    <span className="col-start-5 col-span-1 row-start-3 row-span-1 flex justify-end text-zinc-500 dark:text-zinc-800 text-lg items-center gap-1"><User size="23" className="text-zinc-500 dark:text-zinc-800"/>{data.writer}</span>
                </div>
                <div className="w-full flex flex-col items-center gap-5 mb-20">
                    {data.article.map((item,index : number)=>(
                        item.type === "text" ? (
                            <p className="w- text-zinc-900 dark:text-zinc-200 text-lg" key={index}>{item.content}</p>
                        ) : item.type === "img" ? (
                            <div key={index} className="w-[90%] rounded-md h-64 overflow-hidden flex justify-center items-center">
                            <Image alt={data.title} src={item.content} sizes="100vw" height={0} width={0} style={{width: "100%",height: "auto"}}/>
                            </div>
                        ) : (
                            <h1 className="w-full">{item.content}</h1>
                        )
                    ))}
                </div>
                <div className="w-full">
                   add commment
                </div>
                <div className="w-full flex flex-col items-center">
                    {data.comments.map((item,index : number)=>(
                        <div key={index} className="w-full h-44 rounded border">
                            <div className="w-full h-[10%] flex items-center justify-between px-5">{item.user}{item.date}</div>
                            <div className="h-[90%]">{item.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default SinglePost;
//,{cache: "no-cache"}