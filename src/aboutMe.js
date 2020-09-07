import React from 'react';
import './aboutMe.css'

function About (){

    return (

        <section id="about">
            <div className="contenedor">
                    <h3>Primeros pasos para ser programador</h3>
                    <div className="contenedor-sobremi">
                        <div className="computadoras">
                            <img src="imagenes/computadoras.png" alt="" width="400px" height="400px" />
                        </div>
                        <div className="texto">
                            <p>
                                El camino a ser programador es un camino largo, intenso y revolucionario. Sin duda ser <i>developer</i> en este siglo nos llena de oportunidades y poder. Sí, poder de crear, poder de ayudar, poder de materializar ideas y ser tal vez esa persona autónoma que soñamos ser, gastando el tiempo de hoy en fichas para el futuro.
                            </p>                            
                            <p>
                                Aca encontrarás una guía, un sendero, compañía en tus primeros pasos. Para obtener tu primer empleo como programador es bueno tener consejos y apoyo para que tus bases sean sólidas y acertadas.                                
                            </p>
                            <p>
                                Tengo un programa ideal para que puedas iniciarte en este mundo. Yo te acompañaré en tus primeros pasos, pero luego todo depende de vos. Los programadores de hoy están moldeando el mundo del mañana, subite al tren, no te quedés.
                            </p>
                            
                            <a href="#advices">Go on!</a>
                        </div>
                    </div>
                </div>
        </section>


    )

}

export default About;

           