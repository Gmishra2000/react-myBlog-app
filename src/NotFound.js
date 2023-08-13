import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Patience is the key to success ......</h2>
            <p>That page cannot be found</p>
            <Link to="/"> Back to homepage..</Link>
        </div>
     );
}
 
export default NotFound;