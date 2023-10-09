import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {

    const [blogs, setBlogs] = useState([]);



    useEffect(() => {

        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])


    return (
        <div>


            {
                blogs?.map(blog => (<div key={blog.id}

                    className=" w-9/12 mt-10 mx-auto"
                >



                    <div className="card  mb-10 bg-base-100 shadow-xl">
                        <figure><img src={blog.image} alt="" className=" h-4/5" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {blog.subject}</h2>

                            < div rel="noopener noreferrer" className="text-xl ">{blog.author}</div>


                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                <span>{blog.date}</span>
                                <span>  </span>
                            </div>
                            <p>{blog.excerpt} </p>

                        </div>
                    </div>


                </div>))
            }
        </div>
    );
};

export default Blog;