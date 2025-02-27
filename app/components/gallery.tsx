'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import BackIcon from '/public/backward-solid.svg';
import PauseIcon from '/public/circle-pause-solid.svg';
import PlayIcon from '/public/circle-play-solid.svg';
import ForwardIcon from '/public/forward-solid.svg';

const images = [
    // green
    '/pots/green1.jpg',
    '/pots/green2.jpg',
    '/pots/green3.jpg',
    '/pots/green4.jpg',
    // blue
    '/pots/blue1.jpg',
    '/pots/blue2.jpg',
    '/pots/blue3.jpg',
    '/pots/blue4.jpg',
    // orange
    '/pots/orange1.jpg',
    '/pots/orange2.jpg',
    '/pots/orange3.jpg',
    '/pots/orange4.jpg',
    '/pots/orange5.jpg',
    // blue
    '/pots/blue-white-1.jpg',
    '/pots/blue-white-2.jpg',
    '/pots/blue-white-3.jpg',
    '/pots/blue-white-4.jpg',
     // white
     '/pots/white1.jpg',
     '/pots/white2.jpg',
     '/pots/white3.jpg',
     '/pots/white4.jpg',
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
            <div className='potspics' >
                {images.map((src, index) => (
                    <div 
                        key={index}
                        style={{
                            transition: 'opacity 1s ease-in-out',
                            opacity: index === currentImageIndex ? 1 : 0,
                            display: index === currentImageIndex ? 'block' : 'none',
                         }}
                    >
                        <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            width={1500}
                            height={1500}
                        />
                    </div>
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