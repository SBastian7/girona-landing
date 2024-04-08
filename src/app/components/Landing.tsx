import Button from "./ui/Button";

function Landing() {
    return (
        <section id="main-section" className="main-content bg-main flex flex-col items-center text-shadow-sm justify-center" style={{ minHeight: '100vh', paddingTop: '16vh' }}>
            <div className="montiliviFont text-5xl md:text-9xl">
                TOUR MONTILIVI
            </div>
            <div className="gothamBold text-xl md:text-4xl xl:text-6xl">
                Visita el estadio del Girona FC
            </div>
            <p className="text-lg md:text-2xl xl:text-4xl gothamFont mt-9 text-center">
                Vive una emocionante experiencia para todos los aficionados <br /> que quieran sentir al Girona FC más cerca que nunca
            </p>
            <div className="mt-10">
                <Button variant="secondary" title="Comprar entradas" link="https://bstadium.es/tours-originales/" />
            </div>
        </section>
    );
}

export default Landing;