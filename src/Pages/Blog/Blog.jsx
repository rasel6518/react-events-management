import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    console.log(blogs);

    useEffect(() => {

        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])


    return (
        <div>
            {/* <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                        <p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline dark:text-violet-400">Convenire</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leadi">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 1, 2020</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </section> */}

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