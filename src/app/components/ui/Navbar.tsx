import Image from "next/image";
import Logo from '@/resources/img/logo.png'


function Navbar() {
    return (
        <div className="content nav flex justify-between text-xl font-bold bg-dark" style={{ 'fontFamily': 'montilivi' }}>
            <a className="ps-5" href="#main-section">
                <Image width={100} height={100} src={Logo} className="aspect-square" alt="Tour Interactivo logo" />
            </a>
            <div className="w-3/6 justify-evenly hidden md:flex">
                <a href="#what-is-section">
                    ¿Qué es?
                </a>
                <a href="#what-includes-section">
                    ¿Qué incluye?
                </a>
                <a href="#itinerary-section">
                    Itinerario
                </a>
                <a href="#practical-info-section">
                    Información práctica
                </a>
                <a href="#tickets-section">
                    Entradas
                </a>
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