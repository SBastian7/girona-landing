import React from 'react';
import Image from "next/image";

import ItineraryImage from '@/resources/img/itinerary-short.jpg'
import useIsMobile from '../hooks/useIsMobile';
import NextSectionChevron from './ui/NextSectionChevron';

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
        <section id="itinerary-section" className="main-content bg-visit flex flex-col text-center items-center justify-center"  style={{ minHeight: '100vh' }}>
            <div className="text-3xl md:text-4xl xl:text-5xl mb-10 gothamFont uppercase font-extrabold">
                ITINERARIO
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-center md:items-center md:gap-6 mt-10">
                <Image src={ItineraryImage} alt="Itinerary Girona" className='px-3 md:px-0 rounded-3xl w-full md:w-6/12' width={0}></Image>
                <div className="w-full md:w-6/12">
                    {
                        itinerary.map((step,i) => (
                            <div className="flex justify-start my-3 ms-24 md:ms-0" key={step.name}>
                                <div className="bg-primary md:px-3 md:py-2 rounded-circle me-2 text-lg md:text-xl">{i+1}</div>
                                <p className="pt-1 md:pt-2 text-base md:text-lg xl:text-xl">{step.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
                <NextSectionChevron target='#practical-info-section' />
            
        </section>
    );
}

export default Itinerary;