'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import BackIcon from '/public/backward-solid.svg';
import PauseIcon from '/public/circle-pause-solid.svg';
import PlayIcon from '/public/circle-play-solid.svg';
import ForwardIcon from '/public/forward-solid.svg';

const images = [
    // green
    '/green-1.JPG',
    '/green-2.JPG',
    '/green-3.JPG',
    '/green-4.JPG',
    // blue
    '/blue-1.JPG',
    '/blue-2.JPG',
    '/blue-3.JPG',
    '/blue-4.JPG',
    // orange
    '/orange-1.JPG',
    '/orange-2.JPG',
    '/orange-3.JPG',
    // blue
    '/blue2-1.JPG',
    '/blue2-2.JPG',
    '/blue2-3.JPG',
    '/blue2-4.JPG',
     // white
     '/white-1.JPG',
     '/white-2.JPG',
     '/white-3.JPG',
     '/white-4.JPG',
     //making
     '/making1.JPG',
     '/making2.JPG',
     '/making3.JPG',
     '/making4.JPG',

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