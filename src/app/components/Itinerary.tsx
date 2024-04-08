import React from 'react';
import Image from "next/image";

import ItineraryImage from '@/resources/img/itinerary-short.jpg'
import useIsMobile from '../hooks/useIsMobile';

interface ItineraryType {
    name: string;
}

const itinerary: ItineraryType[] = [
    {
        name: 'Entrada y Bienvenida'
    },
    {
        name: 'Sala de Prensa'
    },
    {
        name: 'Vestidor Local'
    },
    {
        name: 'Vestidor Visitante'
    },
    {
        name: 'Palco Presidencial'
    },
    {
        name: 'Terreno de Juego'
    },
    {
        name: 'Tienda Oficial'
    },

]

function Itinerary() {
    const isMobile: boolean = useIsMobile();

    return (
        <>
            <div id="itinerary-section" className='relative bottom-20'></div>
            <section className="main-content bg-visit flex flex-col text-center items-center justify-center gap-16 min-h-screen pb-10" >
                    <div className="text-5xl montiliviFont mb-10 md:mb-0">
                        ITINERARIO
                    </div>
                    <div className="flex justify-start  gap-6 pb-10 ">
                        <Image src={ItineraryImage} alt="Itinerary Girona" className='w-3/6' width={isMobile ? 300 : 800}></Image>
                        <div className="text-shadow w-3/6 items-center pt-10" >
                            {
                                itinerary.map((step,i) => (
                                    <div className="flex my-3" key={step.name}>
                                        <div className="bg-primary py-1 md:px-3 md:py-2 rounded-circle me-2 text-sm md:text-lg">{i+1}</div>
                                        <p className="pt-1 md:pt-2 text-sm md:text-lg">{step.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            </section>
        </>
    );
}

export default Itinerary;