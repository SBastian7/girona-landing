import React from 'react';
import Image from "next/image";

import ItineraryImage from '@/resources/img/itinerary.webp'
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
            <div id="itinerary-section" className='relative bottom-32'></div>
            <section className="main-content bg-visit flex flex-col md:flex-row text-center items-center justify-evenly min-h-screen pb-10" >
                <div className="text-shadow">
                    <div className="text-5xl montiliviFont my-10 md:mb-6">
                        ITINERARIO
                    </div>
                    {
                        itinerary.map((step,i) => (
                            <div className="flex my-3" key={step.name}>
                                <div className="bg-primary py-1 md:px-3 md:py-2 rounded-circle me-2 text-sm md:text-xl">{i+1}</div>
                                <p className="pt-1 md:pt-2 text-sm md:text-xl">{step.name}</p>
                            </div>
                        ))
                    }
                </div>
                <Image src={ItineraryImage} alt="Itinerary Girona" width={isMobile ? 300 : 500}></Image>
            </section>
        </>
    );
}

export default Itinerary;