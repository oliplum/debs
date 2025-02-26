'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import BackIcon from '/public/backward-solid.svg';
import PauseIcon from '/public/circle-pause-solid.svg';
import PlayIcon from '/public/circle-play-solid.svg';
import ForwardIcon from '/public/forward-solid.svg';

const images = [
    // green
    '/pots/green-1.JPG',
    '/pots/green-2.JPG',
    '/pots/green-3.JPG',
    '/pots/green-4.JPG',
    // blue
    '/pots/blue-1.JPG',
    '/pots/blue-2.JPG',
    '/pots/blue-3.JPG',
    '/pots/blue-4.JPG',
    // orange
    '/pots/orange-1.JPG',
    '/pots/orange-2.JPG',
    '/pots/orange-3.JPG',
    // blue
    '/pots/blue2-1.JPG',
    '/pots/blue2-2.JPG',
    '/pots/blue2-3.JPG',
    '/pots/blue2-4.JPG',
     // white
     '/pots/white-1.JPG',
     '/pots/white-2.JPG',
     '/pots/white-3.JPG',
     '/pots/white-4.JPG',
     //making
     '/pots/making1.JPG',
     '/pots/making2.JPG',
     '/pots/making3.JPG',
     '/pots/making4.JPG',

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
        <div>
            <div style={{ position: 'relative', width: '100%', height: '650px' }}>
                {images.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`Image ${index + 1}`}
                        fill
                        style={{
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: index === currentImageIndex ? 1 : 0,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            objectFit: 'contain',
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