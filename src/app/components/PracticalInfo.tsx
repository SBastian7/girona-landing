'use client'
import { useTranslations } from "next-intl";

import useIsMobile from "@/app/hooks/useIsMobile";

import SectionWrapper from "./ui/SectionWrapper";

function PracticalInfo() {
    const t = useTranslations('practical_info');
    const isMobile = useIsMobile();

    const sectionContent = (
        <div className="grid grid-cols-12 text-sm md:text-xl ps-4 md:ps-0 text-start" style={{ lineHeight: isMobile ? '17px' : '25px' }} >
            <div className="hidden md:block col-span-2"></div>
            <div className="col-span-1 pt-1 md:pt-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
            </div>
            <div className="col-span-11 md:col-span-9 ps-7">
                {t('date_1')}
                <br />
                {t('date_2')}
                <br />
                {t('date_3')}
                <br />
                {t('date_4')}
                <br />
                <span className="md:text-base">{t('date_5')}</span>
                <br />
            </div>

            <div className="hidden md:block  col-span-2"></div>
            <div className="col-span-1 pt-3 my-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <div className="col-span-11 md:col-span-9 ps-7 pt-5 my-4">
                {t('duration')}
            </div>

            <div className="hidden md:block col-span-2"></div>
            <div className="col-span-1 pt-6 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
            </div>
            <div className="col-span-11 md:col-span-9 ps-7 pt-8 mb-4">
                {t('minors_1')}
                {/* <br />
                {t('minors_2')} */}
            </div>

            <div className="hidden md:block col-span-2"></div>
            <div className="col-span-1 pt-6 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                </svg>
            </div>
            <div className="col-span-11 md:col-span-9 ps-7 pt-8 mb-4">
                {t('languages')}
            </div>

            <div className="hidden md:block col-span-2"></div>
            <div className="col-span-1 pt-6 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <div className="col-span-11 md:col-span-9 ps-7 pt-8 mb-4">
                {t('cancelation')}
            </div>

            <div className="hidden md:block col-span-2"></div>
            <div className="col-span-1 pt-8 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
            </div>
            <div className="col-span-11 md:col-span-9 ps-7 pt-4 md:pt-7 mb-4">
                {t('groups_1')}
                <br />
                {t('groups_2')} 
                <a href="https://share-eu1.hsforms.com/1aCR1JCczR12sjobmVMt5uAfslan?__hstc=209692045.e84f9c850fb2a00620df1ef674cca52b.1712850863108.1714988162068.1715002061490.49&__hssc=209692045.1.1715002061490&__hsfp=2198788217
" target="_blank" className="underline">{t('groups_a')}</a>.
            </div>
        </div>
    )

    return (
        <SectionWrapper
            id="practical-info-section" 
            title={t('title')}
            bgSrc="" 
            content={sectionContent} 
            skipAnimation={true}
        />
    );
}

export default PracticalInfo;