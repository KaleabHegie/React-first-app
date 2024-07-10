import useFetchData from "./useFetch";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const MovieDeatil = () => {


    const { id } = useParams()
    const  { data : movie, isLoading, error } = useFetchData('http://localhost:8000/movies/' + id)
    const history = useHistory()

    const handleDelete = (e) => {
        e.preventDefault();
         fetch('http://localhost:8000/movies/' + movie.id , {
            method: 'DELETE'
        })
        .then(() => {
           alert('Movie Deleted')
           history.push('/')
        })
    }
    return ( 
        <div className="movie-detail">
            {error && <div> {error} </div> }
            {isLoading && <div className="loader-container"> <div className="loader spinner"></div></div> }
            {movie && (
                <article className="col-lg-4">
                    <h2> {movie.title} </h2>
                    <p> {movie.mainActor} </p>
                    <div>
                        {movie.description}
                    </div>
                    <button onClick={handleDelete} className="btn btn-danger pl-4 pr-4 mt-3"> Delete </button>
                </article>
            )}
        </div>
     );
}
 
export default MovieDeatil;