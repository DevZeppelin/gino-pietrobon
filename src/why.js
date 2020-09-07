import React from 'react'
import WhyItem from './whyItem'
import './why.css'

const WhyList = [

    {
        id: 1,
        img: 'imagenes/velocidad.png',
        title: 'Información',
        p: 'Los primeros pasos son muy importantes, y hay muchas tecnologías... ¿Por qué Javascript y no otro lenguaje?'
    },

    {
        id: 2,
        img: 'imagenes/mantenimiento.png',
        title: 'Un padrino',
        p: 'De no haber tenido alguien que me aconseje en cosas básicas, todo hubiera sido más dificil'
    },

    {
        id: 3,
        img: 'imagenes/mobile-icon.png',
        title: 'Comunidad',
        p: 'Quiero ayudarte en todo eso que me ayudaron a la hora de empezar a estudiar'
    }

]


function Why() {
     return (

         
         <section id="why">

            <div className="contenedor">
                <h3>¿Por que anotarme?</h3>
                <div className="contenedor-why">

                {WhyList.map(({id, img, title, p}) => <WhyItem key={id} img={img} title={title} p={p} />)}
                   
                </div>
            </div>
            
        </section>
         
      )
  }

 export default Why 