import { useEffect, useState } from "react";
import axios from 'axios'
const useFetch = (url: string) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const abortController = new AbortController()
        const apiUrl = url;
    
        // Fetch data from the API using Axios
        axios.get(apiUrl)
          .then(response => {
            // Update the state with the fetched event data
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