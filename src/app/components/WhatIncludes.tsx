import { StaticImageData } from "next/image";
import Carousel from "./ui/Carousel";
import IconVR from '@/resources/img/icon-vr.webp';
import IconMap from '@/resources/img/mapa.webp';

export interface CarouselItem {
    title: string;
    icon: StaticImageData; // Assuming IconVR is a string representing the path to the icon
    description: string;
}

function WhatIncludes() {
    const carouselItems: CarouselItem[] = [
        {
            title: 'EXPERIENCIA INMERSIVA',
            icon: IconVR,
            description: "A través de las gafas de realidad virtual, podrás vivir el ambiente de un partido del Girona FC y sentirás como viven los jugadores los momentos previos a un partido con el estadio lleno."
        }, {
            title: 'VISITA NUESTROS ESPACIOS',
            icon: IconMap,
            description: "Visitarás los lugares más exclusivos de Montilivi."
        }
    ];

    return (
        <section
            id="what-includes-section"
            className="main-content bg-what-includes flex flex-col items-center justify-center min-h-screen"
        >
            <div className="text-shadow text-5xl my-10 mb-16 montiliviFont">¿Qué incluye?</div>
            <Carousel items={carouselItems} />
        </section>
    );
}

export default WhatIncludes;
