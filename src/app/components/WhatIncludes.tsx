import Image, { StaticImageData } from "next/image";
import Carousel from "./ui/Carousel";
import IconVR from '@/resources/img/gafas-svg.svg';
import IconMap from '@/resources/img/map-marker.svg';
import VrTourImage from '@/resources/img/vr-tour.jpg'

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

    return (
        <>
            <div  className='relative' style={{ bottom: '16vh' }}  id="what-includes-section" ></div>
        {carouselItems.map((item, idx) => (
            <div className="relative" key={idx}>
                {idx == 0 && <div className='text-shadow text-5xl pt-28 montiliviFont absolute w-full text-center' style={{ top: '7vh', zIndex: 2 }}>¿Qué incluye?</div>}
                {/* <div className="text-shadow text-5xl mb-16 montiliviFont relative">{idx == 0 ? <div className="min-h-20">¿Qué incluye?</div> : <div className="min-h-20"></div> }</div> */}
                <section className={`bg-what-includes-${idx} w-screen text-center ${idx == 0 ? 'py-40' : 'pb-32 pt-3'} text-shadow-sm `}>
                    <div className="w-2/6 mx-auto gothamFont">
                        <div className="text-2xl font-bold mt-28 py-3">{item.title}</div>
                        <Image src={item.icon} alt={item.title} width={idx == 0 ? 70 : 100} className={`mx-auto ${idx == 0 ? 'py-5': 'py-10'}`}></Image>
                        <div className="text-xl py-3">{item.description}</div>
                    </div>
                </section>
            </div>
        ))}
        </>
    );
}

export default WhatIncludes;
