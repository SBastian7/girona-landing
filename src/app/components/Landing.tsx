'use client'
import {useTranslations} from 'next-intl';

import useIsMobile from "../hooks/useIsMobile";
import Button from "./ui/Button";

function Landing() {
    const isMobile = useIsMobile();
    const t = useTranslations('landing');

    return (
        <section id="main-section" className={`main-content relative flex flex-col items-center text-shadow-sm justify-center ${isMobile ? 'bg-main' : ''}`} style={{ minHeight: '100vh' }}>
            <video autoPlay playsInline loop muted preload="auto" className={`absolute flex left-0 top-0 ${isMobile ? 'object-cover h-full' : 'w-full h-full object-cover'}`} style={{ height: '100vh' }}>
                <source src="https://bstadium.s3.us-east-2.amazonaws.com/TOUR+MONTILIVI_SIN.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Content */}
            <div className="montiliviFont text-5xl lg:text-7xl xl:text-8xl text-center relative z-10 md:pt-14">
                {t('title')}
            </div>
            <div className="gothamBold text-xl md:text-4xl xl:text-5xl relative z-10">
                {t('subtitle_1')}
            </div>
            <p className="text-lg md:mt-10 md:pt-16 md:text-2xl xl:text-4xl gothamFont mt-9 text-center px-3 relative z-10">
                {t('p_1')}
                <br />
                {t('p_2')}
            </p>
            <div className="mt-10 z-10" style={{ width: isMobile ? '80vw' : '20vw' }} >
                <Button variant="secondary" title={t('call_to_action')} link="https://bstadium.es/tours-originales/tour-por-el-estadio-montilivi-estadio-del-girona-fc/" />
            </div>
        </section>
    );
}

export default Landing;
