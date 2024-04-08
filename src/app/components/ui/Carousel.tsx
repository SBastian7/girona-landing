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
        items && (
            items?.map((item) => (
                <div key={item.title} className="border flex flex-col">
                    <div className='text-xl md:text-4xl gothamBold'>{item.title}</div>
                    <div className="mx-auto">
                        <Image src={item.icon} width={100} alt="bstadium-vr-icon" />
                    </div>
                    <div className='text-lg md:text-xl mt-6'>
                        {item.description}
                    </div>
                </div>
            ))
        )
    )
}

export default Carousel