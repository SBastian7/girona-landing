import Button from "./ui/Button";

function Landing() {
    return (
        <section id="main-section" className="main-content bg-main flex flex-col items-center justify-center" style={{ minHeight: '100vh' }}>
            <div className="montiliviFont text-shadow mt-10 text-5xl md:text-9xl">
                TOUR MONTILIVI
            </div>
            <div className="gothamBold text-xl md:text-4xl text-shadow">
                Visita el estadio del Girona FC
            </div>
            <p className="text-lg md:text-2xl gothamFont mt-9 text-center text-shadow">
                Vive una emocionante experiencia para todos los aficionados <br /> que quieran sentir al Girona FC más cerca que nunca
            </p>
            <div className="mt-10">
                <Button title="Comprar entradas" link="https://bstadium.es/tours-originales/" />
            </div>
        </section>
    );
}

export default Landing;