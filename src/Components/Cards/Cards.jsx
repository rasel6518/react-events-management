import { Link } from "react-router-dom";


const Cards = ({ aevent }) => {

    const { name, image, buttonText, description, price, id } = aevent


    return (
        <div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg h-[200px] w-[600px]" src={image} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </a>
                    <p className="text-white">{price}</p>
                    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">

                        {description.length > 100 ? (
                            <div>{description.slice(0, 100)}....</div>
                        ) : (
                            <div>{description}</div>
                        )}

                    </div>
                    <Link to={`/eventdetails/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg">
                        {buttonText}

                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Cards;