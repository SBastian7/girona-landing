import Image, { StaticImageData } from "next/image";
import Carousel from "./ui/Carousel";
import IconVR from '@/resources/img/gafas-svg.svg';
import IconMap from '@/resources/img/map-marker.svg';
import VrTourImage from '@/resources/img/vr-tour.jpg'
import NextSectionChevron from "./ui/NextSectionChevron";
import SectionWrapper from "./ui/SectionWrapper";

export interface CarouselItem {
    title: string;
    icon: StaticImageData;
    img: StaticImageData; // Assuming IconVR is a string representing the path to the icon
    description: string;
}

function WhatIncludes() {
    const carouselItems: CarouselItem[] = [
        {
            title: 'VISITA NUESTROS ESPACIOS',
            icon: IconMap,
            img: VrTourImage,
            description: "Visitarás los lugares más exclusivos de Montilivi."
        },
        {
            title: 'EXPERIENCIA INMERSIVA',
            icon: IconVR,
            img: VrTourImage,
            description: "A través de las gafas de realidad virtual, podrás vivir el ambiente de un partido del Girona FC y sentirás como viven los jugadores los momentos previos a un partido con el estadio lleno."
        },
    ];

    const sectionContent = (index: number) => (
        <div className="mx-auto gothamFont  px-3">
            <div className="text-2xl xl:text-3xl font-bold py-3">{carouselItems[index].title}</div>
            <Image src={carouselItems[index].icon} alt={carouselItems[index].title} width={index ? 90 : 60} className={`mx-auto animate-pulse py-5`}></Image>
            <div className="text-base md:text-xl xl:text-2xl py-3">{carouselItems[index].description}</div>
        </div>
    )

    return (
        <>
            <SectionWrapper
                id="what-includes-section-0" 
                title="¿Qué incluye?" 
                bgSrc="bg-what-includes-0" 
                content={sectionContent(0)} 
                nextSection="what-includes-section-1"
            />
            <SectionWrapper
                id="what-includes-section-1" 
                bgSrc="bg-what-includes-1" 
                content={sectionContent(1)} 
                nextSection="itinerary-section"
            />
        </>
    );
}

export default WhatIncludes;
