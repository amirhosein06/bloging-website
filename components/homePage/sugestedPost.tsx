import Image from "next/image";
import Link from "next/link";

const SuggestedPost = async () => {
    const getdata = async ()=>{
        const response = await fetch('http://localhost:3000/api/',{cache: "no-store"});
        return response.json();
    }
    const data = await getdata();
    
    return ( 
        <div className="w-full h-52 flex items-center">
            <div className="w-1/2">
                <div className="w-full h-full flex justify-center items-center overflow-hidden rounded-md z-50">
                    <Image alt={data[0].title} src={data[0].img} width={500} height={300} className="z-10"/>
                </div>
            </div>
            <div className="w-1/2">
                <div className="">
                   <span>{data[0].category}</span>
                   <span>{data[0].date}</span>
                </div>
                <h1>{data[0].title}</h1>
                <p>{data[0].article[0].content}</p>
                <Link href={`/${data[0].id}`}>see more</Link>
            </div>
        </div>
     );
}
 
export default SuggestedPost;