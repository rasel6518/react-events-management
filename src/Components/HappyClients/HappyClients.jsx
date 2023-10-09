import { useEffect, useState } from 'react';
import eventbg from '../../assets/eventbg.jpg';

const HappyClients = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('clients.json')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, []);

    const backgroundImageStyle = {
        backgroundImage: `url(${eventbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className='w-9/12 my-10 mx-auto md:h-[70vh]' style={backgroundImageStyle}>
            <h1 className=' text-slate-200 text-center pt-5  md:pt-10 text-xl md:text-3xl'>What Our Clients Are Saying</h1>

            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:gap-8">
                {reviews.map(review => (
                    <div key={review.id} className="bg-white p-4 flex items-center md:p-5 lg:p-6  bg-transparent rounded-lg shadow-md">


                        <div>
                            <h3 className=" text-lg md:text-xl text-white font-bold mb-2">{review.name}</h3>
                            <p className="text-white mb-2">{review.designation} at {review.company}</p>
                            <p className="text-white">{review.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HappyClients;
