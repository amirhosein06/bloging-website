import LataestPost from "@/components/homePage/allPosts";
import Banner from "@/components/homePage/banner";
import SuggestedPosts from "@/components/homePage/sugestedPost";

const HomePage = () => {
  return ( 
    <div className="w-full">
      <Banner/>
      <SuggestedPosts />
      <LataestPost />
    </div>
  );
}
 
export default HomePage;