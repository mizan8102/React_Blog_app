
import { useState } from "react";
import { Link } from "react-router-dom";
const BlogList = ({blogs,href,title,handleDelete}) => {
const [test] = useState(href);
const [titles] =useState(title);
    return ( 
        <>
          <div className="rounded-xl justify-items-center">
            <h1 className="text-xl font-bold text-black shadow-xl ml-12 p-2 uppercase">{titles}</h1>
          </div>
         {blogs.map((dd)=> (  
          <Link to={`/blog/${dd.id}` }key={dd.id}>
            <div className="px-4 py-6 sm:px-0" >
               <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" >
                    <div className="md:flex">
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{ dd.title }</div>
                            <a href={ test } className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">written By {dd.writer}</a>
                            <p className="mt-2 text-slate-500">{ dd.Des }</p>
                            {/* <button className="bg-red-700 text-white text-bold shadow-xl rounded-full pl-2 pr-2 border-gray-600 border-2 " onClick={()=>{ handleDelete(dd.id) }}>Delete</button> */}
                    </div>
                </div>
            </div> 
           </div>
           </Link>
           ))}
        </>
       
     );
}
 
export default BlogList;