import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const EventDetails = () => {
    const { id } = useParams()
    const events = useLoaderData();
    console.log(events)

    const [event, setEvent] = useState({})

    useEffect(() => {

        const findEvent = events?.find(singleEvent => singleEvent.id == id)

        setEvent(findEvent)

    }

        , [id, events])

    return (
        <div>
            <img src={event.image} alt="" />
        </div>
    );
};

export default EventDetails;