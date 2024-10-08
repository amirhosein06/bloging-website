import Link from "next/link";
import { ArrowUp } from "iconsax-react";

const Footer = () => {
    return ( 
        <div className="w-full pt-4 md:pt-0 mt-5 h-[25rem] md:h-80 bg-yellow-50 dark:bg-zinc-950 border-t dark:border-t-zinc-800 flex flex-col items-center">
            <div className="h-[90%] w-full grid grid-cols-3 md:grid-cols-8 grid-rows-[24] md:grid-rows-4">
            <Link href="#topicOnPage" className="lg:text-base text-sm mx-8 my-6 sm:mx-0 sm:my-0 lg:mx-4 lg:my-4 col-start-1 col-end-4 md:col-end-3 row-start-4 md:row-start-4 row-span-1 flex justify-center gap-2 items-center border border-zinc-800 dark:border-zinc-200 rounded-md">
            Back to top <ArrowUp size="19" className="text-black dark:text-white"/>
            </Link>
            <form className="col-start-1 col-span-3 md:col-end-3 row-start-1 row-span-3 flex flex-col items-center justify-center gap-6">
             <input type="email" placeholder="your email ..." className="w-[90%] h-10 border outline-none rounded-md pl-4 shadow dark:border-zinc-600"/>
             <input type="submit" value="submit" className="w-[90%] h-10 rounded-md cursor-pointer bg-zinc-800 text-white" />
            </form>
            <div className="col-start-1 md:col-start-3 col-end-2 md:row-start-1 md:col-end-5 row-span-4 flex flex-col items-center md:items-start md:pl-20 pt-3 md:pt-10">
                <div className="h-1/5 flex items-center text-base sm:text-2xl font-medium">About Us</div>
                <ul className="text-xs sm:*:text-lg *:cursor-pointer *:my-1 mt-2 text-zinc-700 dark:text-zinc-300">
                <li>Mission</li>
                <li><Link href="https://www.linkedin.com/in/amirhosein-zolfaghari06/">Me</Link></li>
                <li>Newsletter</li>
                </ul>
            </div>
            <div className="col-start-2 md:col-start-5 col-end-3 md:row-start-1 md:col-end-7 row-span-4 flex flex-col items-center md:items-start md:pl-20 pt-3 md:pt-10">
            <div className="h-1/5 flex items-center text-base sm:text-2xl font-medium">Support</div>
                <ul className="text-xs sm:*:text-lg *:cursor-pointer *:my-1 mt-2 text-zinc-700 dark:text-zinc-300">
                <li>Contact</li>
                <li>Refund Ploicy</li>
                <li>FAQs</li>
                </ul>
            </div>
            <div className="col-start-3 md:col-start-7 col-end-4 md:row-start-1 md:col-end-9 row-span-4 flex flex-col items-center md:items-start md:pl-20 pt-3 md:pt-10">
            <div className="h-1/5 flex items-center text-base sm:text-2xl font-medium">Social</div>
                <ul className="text-xs sm:*:text-lg *:cursor-pointer *:my-1 mt-2 text-zinc-700 dark:text-zinc-300">
                <li><Link href="https://www.linkedin.com/in/amirhosein-zolfaghari06/">Linkedin</Link></li>
                <li><Link href="https://github.com/amirhosein06">Github</Link></li>
                </ul>
            </div>
            </div>
            <div className="h-[10%] w-full flex justify-center items-center text-xs md:text-sm">
                Created By<Link className="text-sky-700 mx-1" href="https://www.linkedin.com/in/amirhosein-zolfaghari06/">AmirHossein Zolfaghari</Link>- 2024
            </div>
        </div>
     );
}
 
export default Footer;