import Banner from "@/components/homePage/banner";
import SuggestedPost from "@/components/homePage/sugestedPost";

const HomePage = () => {
  return ( 
    <div className="w-full">
      <Banner/>
      <SuggestedPost />
    </div>
  );
}
 
export default HomePage;