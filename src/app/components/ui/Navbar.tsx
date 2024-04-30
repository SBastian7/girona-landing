'use client'
import Image from "next/image";
import Logo from '@/resources/img/logo.png'
import Link from "next/link";
import {useTranslations} from 'next-intl';
import useIsMobile from "@/app/hooks/useIsMobile";


function Navbar() {
    const t = useTranslations('navigation');
    const isMobile = useIsMobile();

    return (
        <div className="content flex justify-center md:justify-between text-base  xl:text-lg font-bold bg-navbar absolute " style={{ fontFamily: 'gotham', zIndex: 50 }}>
            <a className="md:ps-5" href="#main-section">
                <Image width={100} height={100} src={Logo} className="aspect-square" alt="Tour Interactivo logo" />
            </a>
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
                <Link href="/es" className="">{t('lng_1')}</Link>
                <div className="">|</div>
                <Link href="/ca" className="">{t('lng_2')}</Link>
                <div className="">|</div>
                <Link href="/en" className="">{t('lng_3')}</Link>
                <div className="">|</div>
                <Link href="/fr" className="">{t('lng_4')}</Link>
            </div>
        </div>
    );
}

export default Navbar;