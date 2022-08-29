// import { useState,useEffect } from "react";
import Alert from "./Alert";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    const { data:blogs ,isLoading,error } =useFetch('http://localhost:8000/blog');

    // json liver host and DOM_KEY_LOCATION
    // npx json-server --watch data/db.json --port 8000
    const test="www.utcworld.net";


    return ( 
        <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}

            { isLoading && <div className="justify-items-center"><p> Loading...</p></div>}
            { error && <Alert title="Not Found Error" errData={error} />}
            { blogs && <BlogList blogs={blogs} href={test} title="All data"/>}
            {/* <BlogList data={data.filter((blog)=>blog.writer === 'Mizan')} href={test} title="Mizan's data " handleDelete={handleDelete} /> */}
            {/* <input type="button" value="click" onClick={()=>{setName('Mizanur Rahman')}} />
            <p>{name}</p> */}
            {/* /End replace */}
        </div>
      </main>
     );
}
 
export default Home;