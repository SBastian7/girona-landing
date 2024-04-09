import Button from "./ui/Button";
import NextSectionChevron from "./ui/NextSectionChevron";

function Landing() {
    return (
        <section id="main-section" className="main-content bg-main flex flex-col items-center text-shadow-sm justify-center" style={{ minHeight: '100vh' }}>
            <div className="montiliviFont text-5xl lg:text-7xl xl:text-8xl text-center">
                MONTILIVI TOUR INTERACTIVO
            </div>
            <div className="gothamBold text-xl md:text-4xl xl:text-5xl">
                Visita el estadio del Girona FC
            </div>
            <p className="text-lg md:text-2xl xl:text-4xl gothamFont mt-9 text-center px-3">
                Vive una emocionante experiencia para todos los aficionados <br /> que quieran sentir al Girona FC más cerca que nunca
            </p>
            <div className="mt-10">
                <Button variant="secondary" title="Comprar entradas" link="https://bstadium.es/tours-originales/" />
            </div>
            <NextSectionChevron target='#what-is-section' />
        </section>
    );
}

export default Landing;