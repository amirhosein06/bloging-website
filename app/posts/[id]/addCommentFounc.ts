'use server'

import { revalidateTag } from "next/cache";
import { postType } from "@/postTyping";

export const postComment = async (e : FormData,data : postType)=>{
    "use server"
    const commentText = e.get('textBox');
    const newDate = new Date();
    const newPost = {
        id: data.id,
        img: data.img,
        title: data.title,
        date: data.date,
        readTime: data.readTime,
        writer: data.writer,
        category: data.category,
        comments: [...data.comments,{
            commnetid: data.comments.length + 1,
            text: commentText,
            user: "amir",
            date: newDate.toLocaleDateString()
        }],
        article: data.article
    }
    
    await fetch(`https://az-blog-api.vercel.app/posts/${data.id}`,{
        method: "PUT",
        body: JSON.stringify(newPost),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    revalidateTag('posts');
}