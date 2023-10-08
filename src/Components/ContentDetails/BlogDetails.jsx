import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const BlogDetails = () => {
    const { id } = useParams()
    const blogs = useLoaderData();
    console.log(blogs)

    const [blog, setBlog] = useState([])

    useEffect(() => {

        if (blogs) {
            const findBlog = blogs?.find(singleBlog => singleBlog.id == id)

            setBlog(findBlog)
        }

    }

        , [id, blogs])
    return (
        <div>
            <div className="card my-10 w-9/12 mx-auto h-[80vh] bg-base-100 shadow-xl">
                <figure><img src={blog.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{blog.subject}</h2>
                    <p>{blog.author}</p>

                    <p>{blog.excerpt}</p>


                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                        <span>{blog.date}</span>
                        <span>  </span>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default BlogDetails;