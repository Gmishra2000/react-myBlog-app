import { useParams, useNavigate } from "react-router-dom";
import UseFetch from "./UseFetch";

const BlogDetails = () => {
    const navigate = useNavigate(); 
    const {id} = useParams()
    const {data: blog, isPending, error} = UseFetch(`http://localhost:8000/blogs/${id}`);
    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`,{
            method:'DELETE'
        }).then(()=>{
            navigate('/')
        })
      }
    return ( 
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <div>{ blog.body }</div>
                <button onClick={
                    handleDelete
                }>delete Blog</button>
            </article>
            )}
        </div>
     );
}
 
export default BlogDetails;