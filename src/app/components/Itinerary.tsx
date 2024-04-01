import React from 'react';
import Image from "next/image";

import ItineraryImage from '@/resources/img/itinerary.webp'

interface ItineraryType {
    name: string;
}

function Itinerary() {
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

    return (
        <>
            <div id="itinerary-section" className='relative bottom-32'></div>
            <section className="main-content bg-visit flex text-center items-center justify-evenly min-h-screen" >
                <div className="text-shadow">
                    <div className="text-7xl montiliviFont mb-16">
                        ITINERARIO
                    </div>
                    {
                        itinerary.map((step,i) => (
                            <div className="flex my-3" key={step.name}>
                                <div className="bg-primary px-3 py-2 rounded-circle me-2  text-xl">{i+1}</div>
                                <p className="pt-2  text-xl">{step.name}</p>
                            </div>
                        ))
                    }
                </div>
                <Image src={ItineraryImage} alt="Itinerary Girona" width={600}></Image>
            </section>
        </>
    );
}

export default Itinerary;