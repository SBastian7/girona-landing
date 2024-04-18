import React from 'react';
import Image from "next/image";

import ItineraryImage from '@/resources/img/itinerary-short-2.jpg'
import useIsMobile from '../hooks/useIsMobile';
import SectionWrapper from './ui/SectionWrapper';

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

    const sectionContent = (
        <div className="flex w-full flex-col md:flex-row justify-center md:justify-start md:items-center md:gap-6">
            <Image src={ItineraryImage} alt="Itinerary Girona" className='px-3 md:px-0 rounded-3xl w-full md:w-6/12' width={0}></Image>
            
            <div className="w-full">
                {
                    itinerary.map((step,i) => (
                        <div className="flex justify-start my-3 ms-16 md:ms-0" key={step.name}>
                            <div className="bg-primary md:px-3 md:py-2 rounded-circle me-2 text-lg md:text-xl">{i+1}</div>
                            <p className="pt-1 md:pt-2 text-base md:text-lg xl:text-xl font-bold" style={{ color: '#484443' }}>{step.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )

    return (
        <SectionWrapper
            id="itinerary-section" 
            title="Itinerario" 
            bgSrc="bg-visit" 
            content={sectionContent} 
            skipAnimation={true}
            titleClass='text-black'
            // nextSection="practical-info-section"
        />
    );
}

export default Itinerary;