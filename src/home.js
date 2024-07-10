import { useState , useEffect } from "react"
import MovieList from "./movieList"
import useFetchData from "./useFetch";

const Home = () => {
    
    const  { data, isLoading, error } = useFetchData('http://localhost:8000/movies')

    return ( 
        <div className="container">
          {error && <div> {error} </div> }
          {isLoading && <div className="loader-container"> <div className="loader spinner"></div></div> }
          {data && <MovieList movies={data} title='All Movies!' />}
        </div>
     );
}
 
export default Home;