'use client'
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import BackIcon from '../../public/backward-solid.svg';
import PauseIcon from '../../public/circle-pause-solid.svg';
import PlayIcon from '../../public/circle-play-solid.svg';
import ForwardIcon from '../../public/forward-solid.svg';
import { images } from './images';

export default function Gallery() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isPaused) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            return;
        }

        // Auto-advance images when not paused
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
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
            <div className="potspics">
                {images.map((src, index) => (
                    <div
                        key={index}
                        style={{
                            opacity: index === currentImageIndex ? 1 : 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: index === 0 ? 'relative' : 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            transition: isPaused ? 'none' : 'opacity 400ms ease-in-out',
                        }}
                    >
                        <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            width={1500}
                            height={1500}
                            priority={index === 0}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '600px',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                ))}
            </div>
            <div className="arrow-container">
                <button className="arrow-item" onClick={handlePrev}>
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
                <button className="arrow-item" onClick={handleNext}>
                    <Image src={ForwardIcon} alt="Forward" width={30} height={30} />
                </button>
            </div>
        </div>
    );
}