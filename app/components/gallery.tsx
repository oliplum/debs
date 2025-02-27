'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import BackIcon from '/public/backward-solid.svg';
import PauseIcon from '/public/circle-pause-solid.svg';
import PlayIcon from '/public/circle-play-solid.svg';
import ForwardIcon from '/public/forward-solid.svg';

const images = [
    // green
    '/pots/green-1.jpg',
    '/pots/green-2.jpg',
    '/pots/green-3.jpg',
    '/pots/green-4.jpg',
    // blue
    '/pots/blue-1.jpg',
    '/pots/blue-2.jpg',
    '/pots/blue-3.jpg',
    '/pots/blue-4.jpg',
    // orange
    '/pots/orange-1.jpg',
    '/pots/orange-2.jpg',
    '/pots/orange-3.jpg',
    // blue
    '/pots/blue2-1.jpg',
    '/pots/blue2-2.jpg',
    '/pots/blue2-3.jpg',
    '/pots/blue2-4.jpg',
     // white
     '/pots/white-1.jpg',
     '/pots/white-2.jpg',
     '/pots/white-3.jpg',
     '/pots/white-4.jpg',
     //making
     '/pots/making1.jpg',
     '/pots/making2.jpg',
     '/pots/making3.jpg',
     '/pots/making4.jpg',

    // Add all your image paths here
];

export default function Gallery() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handlePause = () => {
        setIsPaused(!isPaused);
    };

 

    return (
        <div >
            <div className='potspics'>
                {images.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`Image ${index + 1}`}
                        width={500}
                        height={500}
                        style={{
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: index === currentImageIndex ? 1 : 0,
                            position: 'absolute',
                           
                        }}
                    />
                ))}
            </div>
            <div className='arrow-container'>
                <button className='arrow-item' onClick={handlePrev}>
                    <Image src={BackIcon} alt="Back" width={30} height={30} />
                </button>
                <button className='arrow-item' onClick={handlePause}>
                    <Image src={isPaused ? PlayIcon : PauseIcon} alt={isPaused ? "Resume" : "Pause"} width={30} height={30} />
                </button>
                <button className='arrow-item' onClick={handleNext}>
                    <Image src={ForwardIcon} alt="Forward" width={30} height={30} />
                </button>
            </div>

            </div>



    );
}