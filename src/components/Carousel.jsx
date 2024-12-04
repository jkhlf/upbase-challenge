import { useState } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "/room.png", 
        "/room2.png",
        "/room3.png"
    ];

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="rounded-3xl overflow-hidden shadow-lg">
            <div className="relative w-full aspect-video">
                <img
                    src={images[currentIndex]}
                    alt={`Sala de estar ampla e aconchegante, equipada com uma lareira, televisão e um sofá. ${currentIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleIndicatorClick(index)}
                            className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-purple-600' : 'bg-gray-400'}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
