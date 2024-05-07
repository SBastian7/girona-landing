'use client'
import Image from "next/image";
import Logo from '@/resources/img/logo.png'
import Link from "next/link";
import { useState } from 'react'; // Import useState hook
import { useTranslations } from 'next-intl';
import useIsMobile from "@/app/hooks/useIsMobile";

function Navbar() {
    const t = useTranslations('navigation');
    const isMobile = useIsMobile();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="content flex justify-center md:justify-between text-base xl:text-lg font-bold bg-navbar absolute" style={{ fontFamily: 'gotham', zIndex: 50 }}>
            {
                isMobile && (
                    isMenuOpen ? (
                        <div className={`fixed right-5 md:hidden cursor-pointer z-50`} onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                    ) : (
                        <div className={`absolute left-5 md:hidden cursor-pointer`} onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    )
                )
            }
            <a className="md:ps-5" href="#main-section">
                <Image width={100} height={100} src={Logo} className="aspect-square" alt="Tour Interactivo logo" />
            </a>
            {isMenuOpen && isMobile && ( // Render menu if it's open and on mobile
                <div className="w-full text-xl font-thin gap-4 bg-practical-info fixed top-0 left-0 h-full z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform translate-x-0">
                    <a href="#what-is-section" onClick={toggleMenu}>
                        {t('nav_1')}
                    </a>
                    <a href="#what-includes-section-0" onClick={toggleMenu}>
                        {t('nav_2')}
                    </a>
                    <a href="#itinerary-section" onClick={toggleMenu}>
                        {t('nav_3')}
                    </a>
                    <a href="#practical-info-section" onClick={toggleMenu}>
                        {t('nav_4')}
                    </a>
                    <a href="#tickets-section" onClick={toggleMenu}>
                        {t('nav_5')}
                    </a>
                    <div className="flex gap-2 mt-20">
                        <Link href="/ca">{t('lng_1')}</Link>
                        <div>|</div>
                        <Link href="/es">{t('lng_2')}</Link>
                        <div>|</div>
                        <Link href="/en">{t('lng_3')}</Link>
                        <div>|</div>
                        <Link href="/fr">{t('lng_4')}</Link>
                    </div>
                </div>
            )}
            <div className="w-3/6 justify-between hidden md:flex">
                <a href="#what-is-section">
                    {t('nav_1')}
                </a>
                <a href="#what-includes-section-0">
                    {t('nav_2')}
                </a>
                <a href="#itinerary-section">
                    {t('nav_3')}
                </a>
                <a href="#practical-info-section">
                    {t('nav_4')}
                </a>
                <a href="#tickets-section">
                    {t('nav_5')}
                </a>
            </div>
            <div className="pe-5 md:flex gap-2 hidden">
                <Link href="/ca">{t('lng_1')}</Link>
                <div>|</div>
                <Link href="/es">{t('lng_2')}</Link>
                <div>|</div>
                <Link href="/en">{t('lng_3')}</Link>
                <div>|</div>
                <Link href="/fr">{t('lng_4')}</Link>
            </div>
        </div>
    );
}

export default Navbar;
