'use server'

import { revalidateTag } from "next/cache";

export const deletePost = async (id : number)=>{
    "use server"
    
    await fetch(`https://az-blog-api.vercel.app/posts/${id}`,{
        method: "DELETE",
    });
    revalidateTag('posts');
}