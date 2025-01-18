import  { useState, useEffect } from "react";

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const slides = [
        {
            id: "slider-1",
            image:
                "https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1422&q=80",
            title: "Hello world",
            subtitle: "Carousel with TailwindCSS and React",
        },
        {
            id: "slider-2",
            image:
                "https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            title: "Hello world",
            subtitle: "Carousel with TailwindCSS and React",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    return (
        <div>
            <div className="sliderAx h-auto">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`container mx-auto transition-opacity duration-400 ${activeSlide === index ? "block" : "hidden"
                            }`}
                    >
                        <div
                            className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="md:w-1/2">
                                <p className="font-bold text-sm uppercase">Services</p>
                                <p className="text-3xl font-bold">{slide.title}</p>
                                <p className="text-2xl mb-10 leading-none">{slide.subtitle}</p>
                                <a
                                    href="#"
                                    className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                                >
                                    Contact us
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between w-12 mx-auto pb-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        className={`rounded-full w-4 p-2 ${activeSlide === index ? "bg-purple-800" : "bg-purple-400"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
