import Link from "next/link";
import Image from "next/image";
import { Add,Messages3,Edit } from "iconsax-react";
import { postType } from "@/postTyping";
import DeleteButton from "./deleteButton";

const Dashboard = async () => {
    const getdata = async ()=>{
        const response = await fetch('https://az-blog-api.vercel.app/posts/',{cache: "no-cache",
            next: {
                tags: ['posts'],
            }
        });
        return response.json();
    }
    const orginalData : postType[] = await getdata();
    const reverseddata = orginalData.reverse();

    return ( 
        <div className="w-full flex flex-col items-center">
            <div className="w-full h-24 flex items-center justify-between px-5">
                <h1 className="text-4xl font-medium">Recent blogs</h1>
                <Link href={`/dashboard/createNewPost/${orginalData.length + 1}`} className="border rounded-lg border-sky-700 text-lg text-sky-700 w-[13%] h-14 gap-1 flex items-center justify-center">
                <Add size="32" className="text-sky-700"/> Add New
                </Link>
            </div>
            <div className="w-full grid grid-cols-3 gap-5">
                {reverseddata.map((item,index : number)=>(
                    <div key={index} className="col-span-1 row-span-1 h-20 border shadow rounded-xl grid grid-cols-3 grid-rows-2 dark:border-zinc-900">
                        <div className="col-start-1 col-end-2 row-span-2 flex items-center justify-center p-1">
                            <div className="w-full h-full rounded-xl overflow-hidden flex items-center justify-center"><Image alt={item.title} src={item.img} sizes="100vw" height={0} width={0} style={{width: "100%",height: "auto"}} loading="lazy" /></div>
                        </div>
                        <h1 className="pl-3 flex items-center capitalize col-start-2 col-end-4 row-span-1 text-xl font-medium text-ellipsis overflow-hidden whitespace-nowrap">{item.title}</h1>
                        <div className="px-3 flex items-center justify-between col-start-2 col-end-4 row-span-1 row-start-2">
                            <div className="flex items-center justify-center gap-1 text-zinc-400 dark:text-zinc-700"><Messages3 size="24" className="text-zinc-400 dark:text-zinc-700"/>{item.comments.length}</div>
                            <Link href={`/dashboard/editPost/${item.id}`} className="flex items-center justify-center w-1/3 h-[80%] gap-1 border rounded text-sky-900 border-sky-700"><Edit size="22" className="text-sky-900"/>Edit</Link>
                            <DeleteButton id={item.id}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Dashboard;