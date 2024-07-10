import { Link } from "react-router-dom"

const MovieList = (props) => {
    const movies = props.movies
    const title = props.title
    return ( 
     

        <div className="blog-list">
            <h1> {title}</h1>
            <div className="row">
            {movies.map((movie) => (
               
                <div className="blog-preview col-lg-4" key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                       <h2>{movie.title}</h2>
                       <p>{movie.mainActor}</p>
                    </Link>
                </div>
                
            ))}
            </div>
        </div>
        
     );
}
 
export default MovieList;