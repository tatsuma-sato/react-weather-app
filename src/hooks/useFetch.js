import {useState, useEffect} from 'react'

export const useFetch = (url)=>{
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchDate = async ()=>{
      try {
        const response = await fetch(url)
        const data = response.json()
        setData(data)
        setLoading(false)
        
      } catch (error) {
        setError("Something went wrong")  
        setLoading(false)
      }
    }
    fetchDate()
  },[url])

  return {data, loading, error}
}