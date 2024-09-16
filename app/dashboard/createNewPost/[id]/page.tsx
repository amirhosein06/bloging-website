'use client'
import { useState,useRef } from "react";
import { Trash } from "iconsax-react";
import { createPost } from "./createNewPostFounc";

interface articleType {
    type: string,
    content: string
}

const CreateNewPost = ({params}:{params : {id : string}}) => {
    const [ArticleArray, setArticleArray] = useState<articleType[] | []>([]);
    const articleForm = useRef<HTMLFormElement>(null);

    const createNewArticle = (e:FormData)=>{
       const type : FormDataEntryValue | null = e.get("articleType"),
       content : FormDataEntryValue | null = e.get("articleContent");

       if (type === "" || content === "" || type === " " || content === " " || type === null || content === null) {
         alert("Please fill out content field");
       }else{
         setArticleArray([...ArticleArray,{type: type.toString(),content: content.toString()}]);
       }
       articleForm.current?.reset();
    }
    const deleteArticle = (article : articleType,e : any)=>{
       e.preventDefault();
       setArticleArray(ArticleArray.filter(u=>u !== article));
    }
    const createPostAction = (e :FormData)=>{
        const title = e.get('title'),
        img = e.get('img'),
        writer = e.get('writer'),
        category = e.get('category');
        
        if (title === "" || img === "" || title === " " || img === " " || writer === "" || writer === " " || category === "" || category === " ") {
            alert("Please fill out fields");
          }else{
            createPost(e,ArticleArray,params.id);
            alert("New post created !");
            window.location.assign("/");
          }
    }

    return ( 
        <div className="w-full p-3 md:p-8 *:text-sm *:sm:text-base">
           <form action={createPostAction} className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center w-full my-2 gap-2 *:shadow *:w-full sm:*:w-1/2 *:rounded-md *:outline-none *:h-10 *:pl-5 *:bg-zinc-100  *:dark:bg-zinc-700">
            <input type="text" maxLength={20} name="title" title="Title" placeholder="Enter Title..."/>
            <input type="text" name="img" title="Image Source" placeholder="Enter Image Source ..."/>
            </div>
            <div className="flex flex-col sm:flex-row items-center w-full my-2 gap-2 *:shadow *:w-full sm:*:w-1/2 *:rounded-md *:outline-none *:h-10 *:pl-5 *:bg-zinc-100  *:dark:bg-zinc-700">
            <input type="text" name="writer" title="Writer" placeholder="Enter Writer..."/>
            <select name="category" className="pr-3" title="Category">
                <option value="Lifestyle">Lifestyle</option>
                <option value="Travel">Travel</option>
                <option value="Technology">Technology</option>
                <option value="Business">Business</option>
                <option value="Fitness">Fitness</option>
                <option value="Fashion">Fashion</option>
            </select>
            </div>
            <div className="w-full gap-3 flex flex-col items-center px-3 m-3">
                {ArticleArray.map((item,index)=>(
                    <div className="w-full h-10 rounded border flex items-center px-3 gap-1" key={index}>
                        <h1 className="w-5/6 text-ellipsis overflow-hidden whitespace-nowrap">{item.content}</h1>
                        <button onClick={(e)=>deleteArticle(item,e)} className="text-xs md:text-base flex items-center justify-center w-1/6 h-[90%] gap-1 border rounded text-red-900 border-red-700"><Trash size="22" className="text-red-900 hidden sm:block"/>Delete</button>
                    </div>
                ))}
            </div>
            <button className="w-full rounded bg-zinc-900 text-white h-12">Create New Post</button>
           </form>
           <form ref={articleForm} action={createNewArticle} className="w-full flex flex-col items-center h-40 mt-2 sm:m-2 border p-2 rounded  dark:border-zinc-700">
                <textarea name="articleContent" className="h-2/3 w-full shadow rounded-md bg-zinc-100  dark:bg-zinc-700 outline-none mb-1 pt-2 pl-5 resize-none" placeholder="Enter Content..."></textarea>
                <div className="w-full h-1/3 flex items-center gap-2 pt-2">
                <select name="articleType" className="w-1/3 h-full shadow rounded-md bg-zinc-100 outline-none pl-5  dark:bg-zinc-700">
                    <option value="text">Text</option>
                    <option value="img">Img</option>
                    <option value="header">Header</option>
                </select>
                <input type="submit" className="w-2/3 rounded bg-zinc-800 text-white h-full" value="Create New Article"/>
                </div>
            </form>
        </div>
     );
}
 
export default CreateNewPost;