function WhatIs() {
    return (
        <>
            <div id="what-is-section" className='relative' style={{ bottom: '16vh' }}></div>
            <section className="main-content bg-what-is text-shadow-sm flex flex-col items-center justify-center " style={{ minHeight: '84vh' }} >
                <div className="text-5xl montiliviFont">
                    ¿Qué es?
                </div>
                <p className="text-lg md:text-2xl mt-16 text-center w-5/6 md:w-3/6">
                    Descubre el Estadio Municipal Montilivi a través de una visita guíada donde podrás conocer los lugar más exclusivos del estadio y conocer a fondo las anécdotas y los momentos históricos del club.
                </p>
                <p className="text-lg md:text-2xl gothamFont mt-9 text-center w-5/6 md:w-3/6">
                    Visitarás la sala de prensa, los vestuarios del equipo local y visitante, las zonas más exlusivas del estadio, entre las que se encuentran el palco presidencial... y, tendrás la oportunidad de acceder al terreno de juego a través del túnel de vestuarios, dónde podrás sacarte una foto junto al terreno de juego y los banquillos.
                </p>
            </section>
        </>
    );
}

export default WhatIs;