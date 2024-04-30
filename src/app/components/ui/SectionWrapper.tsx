'use client'

import useIsMobile from '@/app/hooks/useIsMobile';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionWrapperProps {
    id: string;
    bgSrc: string;
    content: React.ReactNode;
    title?: string;
    titleClass?: string;
    nextSection?: string;
    skipAnimation?: boolean;
}

function SectionWrapper({ id, title, content, bgSrc, nextSection, titleClass, skipAnimation = false }: SectionWrapperProps) {
    const [isInView, setIsInView] = useState(false);

    const isMobile = useIsMobile();

    const { ref } = useInView({
        threshold: isMobile ? 0.1 : 0.5, // Trigger when at least 70% of the component is in view
        triggerOnce: false, // Allow triggering multiple times
        onChange: (inView: boolean) => setIsInView(inView) // Toggle isInView state
    });

    useEffect(() => {
        // If skipAnimation prop is true, immediately set isInView to true
        if (skipAnimation) {
            setIsInView(true);
        }
    }, [skipAnimation]);

    return (
        <div
            id={id}
            ref={ref}
            className={`text-center py-10 ${title == 'Contacto' ? 'md:py-0' : 'md:py-24'} ${bgSrc}`}
        >
            <div className={`${!skipAnimation && isInView ? 'animate__fadeInUp' : !skipAnimation ? 'opacity-0 translate-y-10' : '' }`}>
                <div className={`text-3xl md:text-4xl xl:text-5xl gothamFont uppercase font-extrabold ${titleClass ? titleClass : ''}`}>{title}</div>
                <div className={`flex flex-col justify-center items-center h-full gap-6 w-full ${title ? 'pt-12' : ''} `}>
                    <div className="md:text-xl xl:text-2xl md:w-4/6 lg:w-3/6 xl:w-7/12 flex flex-col gap-10 px-4">{content}</div>
                </div>
            </div>
            {/* {nextSection && <NextSectionChevron target={`#${nextSection}`} />} */}
        </div>
    );
}

export default SectionWrapper;
