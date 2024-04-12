import Image from "next/image";
import Button from "./ui/Button";
import Logo from '@/resources/img/logo.png'
import LogoBstadium from '@/resources/img/Powered-Bstadium.svg'
import SectionWrapper from "./ui/SectionWrapper";
import useIsMobile from "../hooks/useIsMobile";

function Tickets() {
    const isMobile = useIsMobile();

    const sectionContent = (
        <div className="w-full text-center">
            <div className="md:text-2xl pb-7 font-bold">
                Consulta tus dudas o amplía tu información
            </div>
            <br />
            <div className="text-lg flex justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 me-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href="tel:+34618453690">
                    +34 618 45 36 90
                </a>
            </div>
            <div className="text-lg py-4 flex justify-center gap-3">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 me-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </span>
                <a href="mailto:hola@bstadium.es">
                    hola@bstadium.es
                </a>
            </div>

            <div className="my-10">
                <div className="gothamFont text-3xl">
                    Descubre y disfruta del
                </div>
                <br />
                <div className="montiliviFont uppercase text-5xl">
                    Montilivi Tour Interactivo
                </div>
            </div>
            {/* <div className="flex flex-col justify-center"> */}
            <div className="mt-10 w-4/6 md:w-2/6 mx-auto" style={{ width: isMobile ? '80vw' : '20vw' }}>
                <Button variant="secondary" title="Comprar entradas" link="https://bstadium.es/tours-originales/tour-por-el-estadio-montilivi-estadio-del-girona-fc/" />
            </div>
            {/* </div> */}
            <div className="pt-10 mx-auto">
                <Image width={150} height={150} src={Logo} className="aspect-square mx-auto" alt="Tour Interactivo logo" />
            </div>
            <a target="_blank" href="https://bstadium.es" className="flex items-center justify-center gap-5 text-xl pb-10">
                Powered by
                <Image width={150} height={150} src={LogoBstadium} className="aspect-square" alt="Tour Interactivo logo" />
            </a>
        </div>
    )
    
    return (
        <SectionWrapper
            id="tickets-section"
            title="Contacto"
            content={sectionContent}
            bgSrc=""
            skipAnimation={true}
        />
    );
}

export default Tickets;