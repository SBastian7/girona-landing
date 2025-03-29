'use client'
import React from 'react';
import Image from "next/image";
import { useTranslations } from 'next-intl';

import ItineraryImage from '@/resources/img/itinerary-short-2.jpg'
import SectionWrapper from './ui/SectionWrapper';

interface ItineraryType {
    name: string;
}

function Itinerary() {
    const t = useTranslations('itinerary')

    const itinerary: ItineraryType[] = [
        {
            name: t('item_1')
        },
        {
            name: t('item_2')
        },
        {
            name: t('item_3')
        },
        {
            name: t('item_4')
        },
        {
            name: t('item_5')
        },
        {
            name: t('item_6')
        },
        {
            name: t('item_7')
        },
    ]

    const sectionContent = (
        <div className="">
            <div className="flex w-full flex-col md:flex-row justify-center md:justify-start md:items-center md:gap-6">
                <Image src={ItineraryImage} alt="Itinerary Girona" className='px-3 md:px-0 rounded-3xl w-full md:w-6/12' width={0}></Image>
                
                <div className="w-full">
                    {
                        itinerary.map((step,i) => (
                            <div className="flex justify-start my-3 ms-16 md:ms-0" key={step.name}>
                                {
                                    i != 7 && <div className="bg-primary md:px-3 md:py-2 rounded-circle me-2 text-lg md:text-xl">{i+1}</div>
                                }                            
                                <p className="pt-1 md:pt-2 text-base md:text-lg xl:text-xl font-bold" style={{ color: '#484443' }}>{step.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

    return (
        <SectionWrapper
            id="itinerary-section" 
            title={t('title')}
            bgSrc="bg-visit" 
            content={sectionContent} 
            skipAnimation={true}
            titleClass='text-black'
            // nextSection="practical-info-section"
        />
    );
}

export default Itinerary;