import Image, { StaticImageData } from "next/image";
import Carousel from "./ui/Carousel";
import IconVR from '@/resources/img/gafas-svg.svg';
import IconMap from '@/resources/img/map-marker.svg';
import VrTourImage from '@/resources/img/vr-tour.jpg'
import NextSectionChevron from "./ui/NextSectionChevron";

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

    const scrollToNext = (nextElem: Number) => {
        document.getElementById(`bg-what-includes-${nextElem}`)?.click();
    }

    return (
        <>

            {carouselItems.map((item, idx) => (
                <div id={`what-includes-section-${idx}`} className="relative" key={idx}>
                    {idx == 0 && <div className='text-shadow pt-28 text-5xl gothamFont uppercase font-extrabold absolute w-full text-center' style={{ top: '5vh', zIndex: 2 }}>¿Qué incluye?</div>}
                    <section className={`bg-what-includes-${idx} w-screen text-center ${idx == 0 ? 'py-40' : 'pb-32 '} text-shadow-sm `} style={{ minHeight: '100vh' }}>
                        <div className="w-2/6 mx-auto gothamFont pt-48">
                            <div className="text-3xl font-bold py-3">{item.title}</div>
                            <Image src={item.icon} alt={item.title} width={idx == 0 ? 60 : 100} className={`mx-auto animate-pulse ${idx == 0 ? 'py-5' : 'py-10'}`}></Image>
                            <div className="text-lg md:text-2xl py-3">{item.description}</div>
                        </div>
                        <NextSectionChevron target={idx + 1 == carouselItems.length ? `#itinerary-section` : `#what-includes-section-${idx + 1}`} />
                    </section>
                </div>
            ))}
        </>
    );
}

export default WhatIncludes;
