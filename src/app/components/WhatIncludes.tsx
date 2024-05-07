import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

import IconVR from '@/resources/img/gafas-svg.svg';
import IconMap from '@/resources/img/map-marker.svg';
import VrTourImage from '@/resources/img/vr-tour.jpg'
import IconMore from '@/resources/img/more.svg';

import SectionWrapper from "./ui/SectionWrapper";

export interface CarouselItem {
    title: string;
    icon: StaticImageData;
    img: StaticImageData; // Assuming IconVR is a string representing the path to the icon
    description: any;
}

function WhatIncludes() {
    const t = useTranslations('what_includes');

    const carouselItems: CarouselItem[] = [
        {
            title: t('subtitle_1'),
            icon: IconMap,
            img: VrTourImage,
            description: t('p_1').split('-')
        },
        {
            title: t('subtitle_2'),
            icon: IconVR,
            img: VrTourImage,
            description: t('p_2')
        },
    ];

    const sectionContent = (index: number) => (
        <div className="mx-auto gothamFont  px-3">
            <div className="text-2xl xl:text-3xl font-bold py-3">{carouselItems[index].title}</div>
            <Image src={carouselItems[index].icon} alt={carouselItems[index].title} width={index ? 90 : 60} className={`mx-auto animate-pulse py-5`}></Image>
            <div className="text-base md:text-xl xl:text-2xl py-3">
                {
                    typeof(carouselItems[index].description) == 'string' ? (
                        carouselItems[index].description
                    ) : (
                        <ul className="list-disc text-left">
                            {carouselItems[index].description.map((item:string) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    )
                }
            </div>
        </div>
    )

    return (
        <>
            <SectionWrapper
                id="what-includes-section-0" 
                title={t('title')}
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
