import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import IconVR from '@/resources/img/icon-vr.webp';
import ArrowLeft from '@/resources/icons/arrow-left.svg';
import ArrowRight from '@/resources/icons/arrow-right.svg';
import { CarouselItem } from '../WhatIncludes';

interface CarouselProps {
    items: CarouselItem[]
}

function Carousel({ items }: CarouselProps) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + 2) % 2);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNextSlide();
        }, 4000);

        return () => clearInterval(intervalId);
    }, [currentSlide]);

    return (
        items && <div className="flex justify-center">
            <button
                className="carousel-control prev mt-16"
                onClick={handlePrevSlide}
                // disabled={currentSlide === 0}
            >
                <Image src={ArrowLeft} alt='prev-arrow' width={60}></Image>
            </button>
            <div className="carousel-container flex w-5/6 md:w-2/6 text-center mt-12 gap-3 overflow-hidden relative">
                <div
                    className="carousel-track flex transition-transform duration-500 text-shadow"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }} // Change from 100% to 50%
                >
                    {
                        items?.map((item) => (
                            <div key={item.title} className="carousel-slide flex flex-col min-w-full items-center">
                                <div className='text-xl md:text-4xl gothamBold'>{item.title}</div>
                                <div className="mx-auto">
                                    <Image src={item.icon} width={100} alt="bstadium-vr-icon" />
                                </div>
                                <div className='text-lg md:text-xl mt-6'>
                                    {item.description}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <button
                className="carousel-control next mt-16"
                onClick={handleNextSlide}
                // disabled={currentSlide === 1}
            >
                <Image src={ArrowRight} alt='prev-arrow' width={60}></Image>
            </button>
        </div>
    )
}

export default Carousel