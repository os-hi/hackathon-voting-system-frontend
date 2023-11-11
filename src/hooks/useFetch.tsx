import { useEffect, useState } from "react";
import axios from 'axios'
const useFetch = (url: string) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const abortController = new AbortController()
        const apiUrl = url;
    
        axios.get(apiUrl)
          .then(response => {
            setData(response.data.data);
            setIsLoading(false)
            setError(null)
          })
          .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }
            else{
                setIsLoading(false)
                setError(err)
            }
            
          });
        return () => abortController.abort()
      }, [url]);
    return{data, isLoading, error}
}
 
export default useFetch;