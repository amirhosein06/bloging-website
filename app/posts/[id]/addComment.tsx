'use client'

import { postType } from "@/postTyping";
import { useRef } from "react";
import { postComment } from "./addCommentFounc";

const AddComment = ({data} : {data: postType}) => {
    const commentInput = useRef<HTMLFormElement>(null);

    const readyToPostComment = (e : FormData)=>{
       commentInput.current?.reset();
       postComment(e,data);
       alert("Comment Added !");
    }

    return ( 
        <form ref={commentInput} action={readyToPostComment} className="w-full flex flex-col p-3 items-center gap-5 mb-5">
        <textarea name="textBox" className="w-full h-28 dark:bg-zinc-900 bg-zinc-100 p-3 outline-none resize-none rounded" placeholder="Enter text..."></textarea>
        <button className="w-full rounded dark:bg-zinc-800 bg-zinc-900 text-white h-10 flex items-center justify-center">Add Comment</button>
        </form>
     );
}
 
export default AddComment;