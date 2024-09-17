import LataestPost from "@/components/homePage/allPosts";
import Banner from "@/components/homePage/banner";
import SuggestedPosts from "@/components/homePage/sugestedPost";
import { postType } from "@/postTyping";

const HomePage = async () => {
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
const dataForSuggestedPost = reverseddata[0];
const dataForAllPosts = reverseddata.splice(1,);

  return ( 
    <div className="w-full">
      <Banner/>
      <SuggestedPosts data={dataForSuggestedPost} />
      <LataestPost data={dataForAllPosts} />
    </div>
  );
}
 
export default HomePage;