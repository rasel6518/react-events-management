import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const EventDetails = () => {
    const { id } = useParams()
    const events = useLoaderData();
    console.log(events)

    const [event, setEvent] = useState([])

    useEffect(() => {

        if (events) {
            const findEvent = events?.events?.find(singleEvent => singleEvent.id == id)

            setEvent(findEvent)
        }

    }

        , [id, events])

    return (
        <div>
            <div className="card my-10 w-9/12 mx-auto  bg-base-100 shadow-xl">
                <figure><img src={event.image} alt="Shoes" className="h-[80vh] w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{event.name}</h2>
                    <p className="text-lg font-medium">{event.price}</p>
                    <p>{event.description}</p>
                    <div className="card-actions ">
                        <Link to='/booking'>
                            <button className="btn bg-black hover:bg-gray-700 text-white">Booking</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EventDetails;