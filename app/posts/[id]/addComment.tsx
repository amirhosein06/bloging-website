import { postType } from "@/postTyping";
import { revalidateTag } from "next/cache";

const AddComment = async ({data} : {data: postType}) => {

    const postComment = async (e : FormData)=>{
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

    return ( 
        <form action={postComment} className="w-full flex flex-col p-3 items-center gap-5 mb-5">
        <textarea name="textBox" className="w-full h-28 dark:bg-zinc-900 bg-zinc-100 p-3 outline-none resize-none rounded" placeholder="Enter text..."></textarea>
        <button className="w-full rounded dark:bg-zinc-800 bg-zinc-900 text-white h-10 flex items-center justify-center">Add Comment</button>
        </form>
     );
}
 
export default AddComment;