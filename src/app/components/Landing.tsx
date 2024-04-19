import useIsMobile from "../hooks/useIsMobile";
import Button from "./ui/Button";

function Landing() {
    const isMobile = useIsMobile();

    return (
        <section id="main-section" className={`main-content relative flex flex-col items-center text-shadow-sm justify-center ${isMobile ? 'bg-main' : ''}`} style={{ minHeight: '100vh' }}>
            <video autoPlay loop muted preload="auto" className="absolute top-0 left-0 w-full h-full object-cover z-0 hidden md:flex">
                <source src="https://bstadium.s3.us-east-2.amazonaws.com/TOUR+MONTILIVI_SIN.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Content */}
            <div className="montiliviFont text-5xl lg:text-7xl xl:text-8xl text-center relative z-10 md:pt-14">
                MONTILIVI TOUR INTERACTIVO
            </div>
            <div className="gothamBold text-xl md:text-4xl xl:text-5xl relative z-10">
                Visita el estadio del Girona FC
            </div>
            <p className="text-lg md:mt-10 md:pt-16 md:text-2xl xl:text-4xl gothamFont mt-9 text-center px-3 relative z-10">
                Vive una emocionante experiencia para todos los aficionados <br /> que quieran sentir al Girona FC más cerca que nunca
            </p>
            <div className="mt-10 z-10" style={{ width: isMobile ? '80vw' : '20vw' }} >
                <Button variant="secondary" title="Comprar entradas" link="https://bstadium.es/tours-originales/tour-por-el-estadio-montilivi-estadio-del-girona-fc/" />
            </div>
        </section>
    );
}

export default Landing;
