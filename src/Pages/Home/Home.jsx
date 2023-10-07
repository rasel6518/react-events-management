import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";


const Home = () => {
    const eventData = useLoaderData()

    const { events } = eventData
    console.log(events);

    return (
        <div className="my-5">
            <div className="carousel w-full h-[70vh]">
                <div id="slide1" className="carousel-item relative w-full h-[70vh]">
                    <img src="https://i.ibb.co/Kbnt2FW/business-people-office-workplace-interaction-conversation-teamwork-concept.jpg" className="w-full h-[70vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[70vh]">
                    <img src="https://i.ibb.co/5n9zsLC/infrastructure-construction-chip-link-concept.jpg
" className="w-full h-[70vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[70vh]">
                    <img src="https://i.ibb.co/Y2M0zwk/modern-equipped-computer-lab.jpg" className="w-full h-[70vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto w-9/12">
                {
                    events?.map((aevent) => (<Cards key={aevent.id} aevent={aevent} ></Cards>))
                }
            </div>
        </div>
    );
};

export default Home;