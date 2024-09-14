import Link from "next/link";
const categoryList = [
    'Lifestyle',
    'Travel',
    'Technology',
    'Business',
    'Fitness',
    'Fashion'
]
const Category = () => {
    return ( 
        <div className="w-full flex flex-col items-center gap-2 mt-4">
            {
                categoryList.map((item,index)=>(
                    <Link key={index} href={`/categories/${item}`} className="w-full h-20 rounded-md flex items-center justify-center bg-yellow-100 text-xl font-medium">{item}</Link>
                ))
            }
        </div>
     );
}
 
export default Category;