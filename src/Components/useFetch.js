import { useState,useEffect } from "react";

const useFetch=(url)=>{
    const [data,setData]=useState(null);
    // const [name,setName]=useState('Ariful Islam');
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((result) => {
         if( !result.ok){
             throw Error("Could not fetch the data from server");
         }
         return result.json();
        }).then((data) => {
             setData(data);
             setIsLoading(false)
             setError(false)
        }).catch((err) => {
             setError(err.message);
             setIsLoading(false)
        });
     },[url]);

     return { data,isLoading,error }
}

export default useFetch;