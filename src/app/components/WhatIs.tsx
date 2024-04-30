import {useTranslations} from 'next-intl';

import SectionWrapper from "./ui/SectionWrapper";

function WhatIs() {
    const t = useTranslations('what_is')

    const sectionContent = (
        <p className="">
            {t('p_1')}
            <br />
            <br />
            {t('p_2')}
        </p>
    )
    return (
        <SectionWrapper 
            id="what-is-section" 
            title={t('title')}
            bgSrc="bg-what-is" 
            content={sectionContent} 
            nextSection="what-includes-section-0"
        />
    );
}

export default WhatIs;