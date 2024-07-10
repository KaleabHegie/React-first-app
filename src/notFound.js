import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found row justify-content-center">
               <div className="col-lg-5">
                   <h2> <code> 400 </code> Page Not found </h2>
                   <Link to='/'> Back to home ...... </Link>
               </div>
        </div>
     );
}
 
export default NotFound;