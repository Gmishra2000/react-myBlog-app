import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

const Home = () => {
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ])

    // const [blogs, setBlogs] = useState(null);
    // const[isPending, setisPending] = useState(true);
    // const [error, setError] = useState(null);

    const {data:blogs, isPending, error} = UseFetch('http://localhost:8000/blogs');

    const handleDelete = (id) => {
      const newBlogs = blogs.filter((blog)=> blog.id != id );
      // setData(newBlogs);
      // setBlogs((prevBlogs) => removeBlogById(prevBlogs, id));
    }

  // npx json-server --watch data/db.json --port 8000

    // useEffect(()=>{
    //   console.log('useeffect');
    //   fetch('http://localhost:8000/blogs')
    //     .then(res =>{
    //       if(!res.ok){
    //         throw Error('wrong request or response');
    //       }
    //       return res.json()
    //     })
    //     .then(data =>{
    //       console.log(data);
    //       setBlogs(data);
    //       setisPending(false);
    //       setError(null)
    //     })
    //     .catch((err)=>{
    //       console.log(err.message);
    //       setisPending(false);
    //       setError(err.message);
    //     })
    // },[])
    const removeBlogById = (blogs, id) => {
        return blogs.filter((blog) => {
          if (blog.id === id) {
            return false;
          } else if (blog.children) {
            blog.children = removeBlogById(blog.children, id);
          }
          return true;
        });
      };

    // an example of use state hook  is used  when we want to update the state of a variable of a component
    // state can be anyting array, number, boolean , variable anything which we want to update
    // const [name, setName] = useState('initialName');
    // const [age ,setAge] = useState(25)
    // const handleClick = (e)=>{
    //     // console.log('Hello react learner', e);
    //     setName('updatedName');
    //     setAge(30);
    // }

    // const handleClickAgain = (name, e) =>{
    //     console.log("hello " + name, e);
    // }
    const blogTitle = 'Mario\'s Blogs!'
    // if(blogs == null)
      // return(<div><h4>testing</h4></div>)
    return ( 
        <div className="home">
           {/* null check */}
           {console.log('error')};
           {isPending && <div>Loading ...</div>}
           {error && <div>{error}</div>}
           {blogs &&  <BlogList blogs={blogs} title = 'All Blogs!' setDelete={handleDelete}/>}

            {/* <BlogList blogs={blogs.filter ((blog)=>blog.author === 'mario')} title = {blogTitle}/> */}





            {/* <h2>HomePage</h2> */}

            {/* output the initial value and then update  values with use state hook  */}
            {/* <p>{name} age is  {age} </p> */}

            {/* React developer tools very useful tools for debugging react components and understanding */}

            
            {/* Automatic function calling will directly invoke the function as soon as the page loads */}
            {/* <button onClick={handleClick}>Click me</button> */}
            {/* Invoke this in an anonymous function so  that it does not invoke directly to pass the value */}
            {/* <button onClick={
                (e) =>{
                    handleClickAgain('mario',e)
                }
            }>Click me again</button> */}
        </div>
    );
}
 
export default Home;