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
    '/pots/blue-white1.jpg',
    '/pots/blue-white2.jpg',
    '/pots/blue-white3.jpg',
    '/pots/blue-white4.jpg',
    // white
    '/pots/white1.jpg',
    '/pots/white2.jpg',
    '/pots/white3.jpg',
    '/pots/white4.jpg',
    // making
    '/pots/making1.jpg',
    '/pots/making2.jpg',
    '/pots/making3.jpg',
    '/pots/making4.jpg',
];

export default function Gallery() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const timeout = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                if (!isPaused) { // Ensure animation stops if paused
                    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                    setFadeOut(false);
                }
            }, 300); // Match this duration to the CSS fade-out transition time
        }, 2700); // Adjust timing to maintain synchronization

        return () => clearTimeout(timeout);
    }, [isPaused, currentImageIndex]);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setFadeOut(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFadeOut(false);
            setIsAnimating(false);
        }, 300); // Match this duration to the CSS fade-out transition time
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setFadeOut(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setFadeOut(false);
            setIsAnimating(false);
        }, 300); // Match this duration to the CSS fade-out transition time
    };

    const handlePause = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div>
            <div className="potspics">
                {images.map((src, index) => (
                    <div
                        key={index}
                        style={{
                            opacity: index === currentImageIndex && !fadeOut ? 1 : 0,
                            display: index === currentImageIndex || fadeOut ? 'block' : 'none',
                            transition: 'opacity 300ms ease-in-out', // Match this to the fade-out duration
                        }}
                    >
                        <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            width={1500}
                            height={1500}
                            priority={index === 0} // Preload the first image
                        />
                    </div>
                ))}
                {/* Preload all images */}
                {images.map((src, index) => (
                    <Image
                        key={`preload-${index}`}
                        src={src}
                        alt={`Preload Image ${index + 1}`}
                        width={1}
                        height={1}
                        style={{ display: 'none' }} // Hidden preload
                    />
                ))}
            </div>
            <div className="arrow-container">
                <button className="arrow-item" onClick={handlePrev} disabled={isAnimating}>
                    <Image src={BackIcon} alt="Back" width={30} height={30} />
                </button>
                <button className="arrow-item" onClick={handlePause}>
                    <Image
                        src={isPaused ? PlayIcon : PauseIcon}
                        alt={isPaused ? 'Resume' : 'Pause'}
                        width={30}
                        height={30}
                    />
                </button>
                <button className="arrow-item" onClick={handleNext} disabled={isAnimating}>
                    <Image src={ForwardIcon} alt="Forward" width={30} height={30} />
                </button>
            </div>
        </div>
    );
}