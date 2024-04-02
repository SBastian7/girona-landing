import Image from "next/image";
import Logo from '@/resources/img/logo.webp'
import Link from "next/link";

function Navbar() {
    return (
        <div className="content nav flex justify-between text-xl font-bold bg-dark" style={{ 'fontFamily': 'montilivi' }}>
            <a className="ps-5" href="#main-section">
                <Image width={100} height={100} src={Logo} className="aspect-square" alt="Tour Interactivo logo" />
            </a>
            <div className="flex flex-row gap-20">
                <Link href="#what-is-section">
                    ¿Qué es?
                </Link>
                <Link href="#what-includes-section">
                    ¿Qué incluye?
                </Link>
                <Link href="#itinerary-section">
                    Itinerario
                </Link>
                <Link href="#practical-info-section">
                    Información práctica
                </Link>
                <Link href="#tickets-section">
                    Entradas
                </Link>
            </div>
            <div className="pe-5 flex gap-2">
                <div className="">CAS</div>
                <div className="">|</div>
                <div className="">EUS</div>
                <div className="">|</div>
                <div className="">ENG</div>
                <div className="">|</div>
                <div className="">FRE</div>
            </div>
        </div>
    );
}

export default Navbar;