import NextSectionChevron from "./ui/NextSectionChevron";
import SectionWrapper from "./ui/SectionWrapper";

function WhatIs() {
    const sectionContent = (
        <p className="">
            Descubre el Estadio Montilivi a través de una visita guíada donde podrás conocer los lugar más exclusivos del estadio y conocer a fondo las anécdotas y los momentos históricos del club.
            <br />
            <br />
            Visitarás la sala de prensa, los vestuarios del equipo local y visitante, las zonas más exclusivas del estadio, entre las que se encuentran el palco presidencial... y, tendrás la oportunidad de acceder al terreno de juego a través del túnel de vestuarios, dónde podrás sacarte una foto junto al terreno de juego y los banquillos.
        </p>
    )
    return (
        <SectionWrapper 
            id="what-is-section" 
            title="¿Qué es?" 
            bgSrc="bg-what-is" 
            content={sectionContent} 
            nextSection="what-includes-section-0"
        />
    );
}

export default WhatIs;