"use server"

import { revalidateTag } from "next/cache"
interface articleType {
    type: string,
    content: string
}

export const editPost = async (e : FormData,article : articleType[],id : string)=>{
    "use server"
    const title = e.get('title'),
    img = e.get('img'),
    writer = e.get('writer'),
    category = e.get('category');
    const newDate = new Date();

    const newPost = {
        id: id,
        img: img,
        title: title,
        date: newDate.toLocaleDateString(),
        readTime: article.length,
        writer: writer,
        category: category,
        comments: [],
        article: article
    }
    
    await fetch(`https://az-blog-api.vercel.app/posts/${id}`,{
        method: "PUT",
        body: JSON.stringify(newPost),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    revalidateTag('posts');
}