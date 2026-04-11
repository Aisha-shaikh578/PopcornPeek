import axios from "axios";
import { useEffect, useState } from "react"

export const useMovies = (query) => {
  const [movies,setMovies] = useState([]);
  const [isLoading,setIsLoading] =useState(false);
  const [error,setError] = useState(null);

  useEffect(() => {
    // if(!query) {
    //   setMovies([]);
    //   return;
    // }

    const fetchData = async () => {
      try { 
       const res = await axios.get(`https://www.omdbapi.com/?s=movie&apikey=7de9ed53&s=${query}`)
       setMovies(res.data.Search || []);
      } catch (err) {
        setError('OOPS! Something went wrong!')
        console.log(err)
      } finally{
        setIsLoading(false);
      }
    }
    fetchData();
  },[query])

  return {movies, isLoading, error}
}