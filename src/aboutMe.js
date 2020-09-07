import React from 'react';
import './aboutMe.css'

function About (){

    return (

        <section id="about">
            <div className="contenedor">
                    <h3>Una compu y Wi-fi</h3>
                    <div className="contenedor-sobremi">
                        <div className="computadoras">
                            <img src="imagenes/computadoras.png" alt="" width="400px" height="400px" />
                        </div>
                        <div className="texto">
                            <p>
                                El camino a ser programador es un camino largo pero interesante y revolucionario. Sin duda ser <i>developer</i> en este siglo nos llena de oportunidades y poder. Sí, poder de crear, poder de ayudar, poder de materializar ideas y ser tal vez esa persona autónoma que soñamos ser, gastando el tiempo de hoy en fichas para el futuro. Pero... ¿Por donde empezar?
                            </p>                            
                            <p>
                                La ansiedad por conseguir nuestro primer empleo como desarrolladores, empezar a escribir código, o encarar algún proyecto, suele llenarnos de duda y ahí vislumbramos el fantasma de la frustración. Este bicho capaz de hacernos tirar nuestros primeros logros a la basura, por el simple miedo a fracasar.</p>    
                            <p>
                                En esta <strong>escuela</strong> encontrarás una guía, un sendero. Aquí no caminarás solo con miedo a caer, sino que tendrás algo a qué aferrarte para no caer de cara al horizonte de este <i>nuevo mundo</i> tecnológico.                                
                            </p>
                            
                            <p>
                                Tanta información nos marea y no encontramos ese <b>impulso</b> que nos haga arrancar. En esta escuela te voy a dar la información necesaria para que tus priomeros pasos sean firmes y seguros, y así poder empezar con criterio y apoyo ester largo y hermoso camino.
                            </p>
                            
                            <a href="#advices">¡Seguir!</a>
                        </div>
                    </div>
                </div>
        </section>


    )

}

export default About;

           