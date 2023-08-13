import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('yoshi')
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault() // stops page refresh
        setIsPending(true)
        const blog = {title, body, author}
        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(() =>{
            console.log("New Blog added");
            setIsPending(false)
            navigate('/');
            
        })
    }
    
    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"> Blog title:</label>
                <input type="text" required
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                <label htmlFor="body">Blog body:</label>
                <textarea required
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value)
                    }}></textarea>
                <label htmlFor="author">Blog author:</label>
                <select
                     value={author}
                     onChange={(e) => {
                         setAuthor(e.target.value)
                     }}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                    {!isPending && <button>Add Blog</button>}

                {isPending && <button disabled>Add Blog..</button>}
            </form>
        </div>
    );
}

export default Create;