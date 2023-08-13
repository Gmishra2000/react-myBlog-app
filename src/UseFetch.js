import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);
    console.log(url);
    useEffect(()=>{
        console.log('useeffect');
        const controller = new AbortController();
        setTimeout(() => {
          fetch(url, {signal:controller.signal})
            .then(res =>{
              if(!res.ok){
                throw Error('Could not fetch the data from the server');
              }
              return res.json()
            })
            .then(data =>{
              setData(data);
              setisPending(false);
              setError(null)
            })
            .catch((err)=>{
              if(err.name === 'AbortError') {
                console.log('fetch aborted');
              }else{
                setisPending(false);
                setError(err.message);
              }
            })
            
          }, 1000);
          return (() =>{
            controller.abort();
          })
      },[url])
    return {data,isPending,error};
}
 
export default UseFetch;