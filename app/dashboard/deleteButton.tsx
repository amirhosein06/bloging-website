'use client'
import { Trash } from "iconsax-react";
import { deletePost } from "./deletePostFounc";

const DeleteButton = ({id}:{id:number}) => {

    const readyToDeletePost = ()=>{
        let text = "Delete the post?";
        if (confirm(text) == true) {
          deletePost(id);
        } else {
          return;
        }
     }

    return ( 
        <button onClick={readyToDeletePost} className="flex items-center justify-center w-1/3 h-[80%] gap-1 border rounded text-red-700 border-red-700"><Trash size="22" className="text-red-700"/>Delete</button>
     );
}
 
export default DeleteButton;