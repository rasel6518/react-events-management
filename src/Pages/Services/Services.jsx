import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Services = () => {

    const [services, setServices] = useState([]);

    console.log(services.events);

    useEffect(() => {

        fetch('events.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])



    return (
        <div>
            {
                services?.events?.map(aServices => (<div key={aServices.id}

                    className=" w-9/12 mt-10 mx-auto"
                >



                    <div className="card  mb-10 bg-base-100 shadow-xl">
                        <figure><img src={aServices.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {aServices.name}</h2>
                            <p>{aServices.description} </p>
                            <div className="card-actions ">
                                <Link to='/booking'>
                                    <button className="btn bg-black hover:bg-gray-700 text-white">Booking</button>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>))
            }
        </div>
    );
};

export default Services;