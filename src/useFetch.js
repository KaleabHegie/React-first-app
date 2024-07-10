import { useState, useEffect } from 'react';
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const abortCont = new AbortController()

    setTimeout(() => {
      fetch(url , {signal: abortCont.signal} )
      .then(res => {
          if(!res.ok){
              throw Error('Error occured while fetching data!!!!!!!!!!!!!!!!!!!!')
          }
        return res.json()
      })
      .then(data => {
        setData(data)
        setIsLoading(false)
        
        
      })
      .catch(
          err => {
            if (err.name == 'AbortError') {
              console.log('Fetch Aborted')
            }
            else {
              setIsLoading(false)
              setError(err.message)
            }
             
          }
      )
    }, 500);

    return () => abortCont.abort()
   } , [])

  return { data, isLoading, error };

};

export default useFetchData;