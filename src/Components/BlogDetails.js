import { useParams,useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id}=useParams();
    const history=useHistory();
    const { data:blogs, isLoading,error } =useFetch('http://localhost:8000/blog/' +id);
    const handleDelete=()=>{
        fetch('http://localhost:8000/blog/'+blogs.id,{
            method: 'delete',
        }
        ).then((result) => {
            console.log('Delete successfull');
        }).catch((err) => {
            console.log("Delete failed");
        });
        // history.push('/');
        history.go(-1);
    }
    return ( 
        <>
            { isLoading && <div> Loading .....</div>}
           { error && <div> { error } </div>}
         
                { blogs && (
                    <div className="card xl mt-3 ml-5 p-5 shadow-xl justify-items-center rounded-md">
                        <article className="prose prose-lg  lg:prose-xl justify-center">
                        <h1>{blogs.title}</h1>
                        <p className="text-sm"> posted by {blogs.writer}</p>
                        <p>
                       {blogs.Des}
                        </p>
                        <p>
                        {blogs.body}
                        </p>
                        <button onClick={handleDelete}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Delete
                        </button>
                    </article>
                    
                    {/* <button
                    //   onClick={handleDelete(blogs.id)}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Delete
                    </button> */}
                  </div>
                  
                ) }
           
        </>
     );
}
 
export default BlogDetails;