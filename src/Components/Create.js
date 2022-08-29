import { useState } from "react"
import { useHistory } from "react-router-dom";
export default function Create() {

    const [ title,setTitle ] = useState('');
    const [body,setBody ] = useState('');
    const [ writer,setWriter ]=useState('Mizan');
    const [isLoading,setIsLoading]=useState(false);
    const history = useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsLoading(true);
        const blog={title,body,writer};
        fetch('http://localhost:8000/blog',{
            method: 'Post',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(blog)      
        }).then((result) => {
            console.log("Added sucessfull");
            setIsLoading(false);
        }).catch((err) => {
            console.log(err.message());
            setIsLoading(false);
        });
        // history.go(-1);
        history.push('/');
    }
    return (
      <>
        <div className="sm:mt-0 m-10">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-8 md:mt-0 md:col-span-2">
              <form onSubmit={handleSubmit} method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 mt-5 bg-white sm:p-6">
                    
                    <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                          Blog Title
                        </label>
                        <input 
                          id="title"
                          name="title"
                          value={title}
                          onChange={(e)=>setTitle(e.target.value)}
                          type="text"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          writer
                        </label>
                        <select
                          id="writer"
                          name="writer"
                          value={writer}
                          onChange={(e)=>setWriter(e.target.value)}
                          autoComplete="country-name"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value={'Mizan'}>Mizanur Rahman</option>
                          <option value={'Rafi'}>Rafi Ullah</option>
                        </select>
                      </div>
  
                      <div className="col-span-12 sm:col-span-6">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Blog body
                        </label>
                        <textarea 
                          id="body"
                          name="body"
                          rows={5}
                          value={body}
                          onChange={(e)=>setBody(e.target.value)}
                          type="text"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        ></textarea>
                      </div>
  
                     
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                   { !isLoading && <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>}
                  { isLoading && <button
                    
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      waiting....
                    </button>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

      </>
    )
  }
  