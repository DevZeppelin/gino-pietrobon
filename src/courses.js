import React from 'react'
import Course from './coursesItem'
import './courses.css'

const MyCoursesList = [

    {
        id: 0,
        link: 'http:/mimate-mdz.com.ar',
        img: 'imagenes/ejemplos trabajos/mimate.png',
        p: 'Primeros pasos para ser programador'
    },
    {
        id: 1,
        link: 'http:/powersis.com.ar',
        img: 'imagenes/ejemplos trabajos/powersis.png',
        p: 'Javascript - Ejercicios varios'
    },
    {
        id: 2,
        link: 'http://DevZeppelin.github.io/stepy',
        img: 'imagenes/ejemplos trabajos/stepy.png',
        p: 'Mi primera página web'
    }
    

]

 function MyCourses (){

    return(

        <section id="courses">
           
            <div className="contenedor">
                <h3>Cursos</h3>

                <div className="contenedor-mis-trabajos">
                    
                   { MyCoursesList.map(({id, link, img, p}) => <Course key={id} link={link} img={img} p={p} />)}
                 
                </div>

            </div>

        </section>

    

    )
}

export default MyCourses