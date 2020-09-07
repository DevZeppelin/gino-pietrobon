import React from 'react'
import WhyItem from './whyItem'
import './why.css'

const WhyList = [

    {
        id: 1,
        img: 'imagenes/velocidad.png',
        title: 'Información',
        p: 'Yo sabía que quería ser programador, pero nop sabía por donde empezar. El consejo de un amigo que llevaba años en el tema sin duda fue lo más valioso para comenzar dando pasos firmes y sin tanta incertidumbre. Por eso este proyecto para ayudarte.'
    },

    {
        id: 2,
        img: 'imagenes/mantenimiento.png',
        title: 'Tu primer contacto',
        p: 'Tener mi whatsapp te va a ayudar a salir de pequeños apuros y dudas que vayan surgiendo. Tal vez esto haga la diferencia entre resolver una duda y no caer en la frustración'
    },

    {
        id: 3,
        img: 'imagenes/mobile-icon.png',
        title: 'Comunidad',
        p: 'Quiero ayudarte en todo eso que me ayudaron a la hora de empezar a estudiar. Quiero crear una comunidad de novatos capaz de ayudar a cualquiera a emprender este camino. ¿Te sumás?'
    }

]


function Why() {
     return (

         
         <section id="why">

            <div className="contenedor">
                <h3>Empezar te va a cambiar la vida</h3>
                <div className="contenedor-why">

                {WhyList.map(({id, img, title, p}) => <WhyItem key={id} img={img} title={title} p={p} />)}
                   
                </div>
            </div>
            
        </section>
         
      )
  }

 export default Why 