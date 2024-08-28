import { Playpen_Sans } from "next/font/google";

const playpen_sans = Playpen_Sans({ subsets: ["emoji"], weight: "400"});

const Banner = () => {
    return ( 
    <div className="w-full h-32 overflow-hidden flex justify-center items-center bg-yellow-100 dark:bg-zinc-950">
       <h1 className={`${playpen_sans.className} text-3xl`}>Welcom to our blog</h1>
    </div>
    );
}
 
export default Banner;
//Playpen Sans