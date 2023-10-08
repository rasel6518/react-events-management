import { Link } from "react-router-dom";


const BlogCard = ({ blog }) => {
    const { id, subject, image, date, author, excerpt } = blog;
    return (
        <div>
            <section className="py-6 sm:py-12 lg:w-96 rounded dark:bg-gray-800 dark:text-gray-100">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl h-32 font-bold">{subject}</h2>
                        {/* <p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p> */}
                    </div>
                    <div className="">
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover h-[200px] w-[600px] dark:bg-gray-500" src={image} />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <div rel="noopener noreferrer" aria-label="Te nulla oportere reprimique his dolorum"></div>
                                <div rel="noopener noreferrer" className="text-xs tracki uppercase hover:underline dark:text-violet-400">{author}</div>
                                <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                                    {excerpt.length > 80 ? (
                                        <div>{excerpt.slice(0, 80)}....

                                            <Link to={`/blogdetails/${id}`} >
                                                <button className="text-blue-500 font-semibold text-xl">Read More</button></Link>


                                        </div>
                                    ) : (
                                        <div>{excerpt}</div>
                                    )}
                                </h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>{date}</span>
                                    <span>  </span>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogCard;