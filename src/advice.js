import React from 'react'
import Advice from './adviceItem'
import './advice.css'

const AdvicesListData = [
    {
        title: 'Elegir el lenguaje correcto',
        p: 'Creo que el lenguaje del momento es Javascript, por lo que en esta escuela comenzaremos aprendiendo esta tecnología moderna y muy demandada actualmente. Saber JS te dará el poder de agregar a una web la magia de hacer lo que quieras. Programar es crear.',
        clase: 'violeta',
        id: '1',
    },
    {
        title: 'Aprender Inglés',
        p: 'Hoy existen diversos métodos sencillos o aplicaciones que con un mínimo esfuerzo pueden aportarnos gran conocimiento, y con prácticas repetitivas podremos llegar a dominar este lenguaje que es una máquina de abrir puertas y oportunidades. Saber inglés hace la diferencia.',
        clase: 'celeste',
        id: '2',
        
    },
    {
        title: 'Estar actualizado',
        p: 'Miles de compañías y cerebros compiten a diario para ganar terreno en el campo de batalla tecnológico, por lo que todo el tiempo emergen nuevas tecnologías y otras van quedando obsoletas. Por eso es importante estar al tanto para no enfocar neustra energía en el camino incorrecto.',
        clase: 'violeta',
        id: '3',
    },
    {
        title: 'Organizarse',
        p: 'Te voy a ayudar a armar un calendario en donde diagrames tus días, anotes tus objetivos, y encontrar en él un motivo para cumplir nuestras metas diarias y que cada nuevo día nos acerquemos un pasito más a nuestro objetivo de lo que queremos para nuestras vidas',
        clase: 'celeste',
        id: '4',    
    },
    {
        title: 'Pasión',
        p: 'Si logramos encontrar la pasión, vamos a transformar dos horas de espera en un centro médico en dos horas super productivas de estudio, hacer ejercicios, leer un artículo, o simplemente cualquier cosa interesante que nos haga pensar y matar el tiempo aprendiendo.',
        clase: 'violeta',
        id: '5',
    },

    {
        title: 'Trabajo',
        p: 'Si te metés en esto por la plata, no van a ser los mismos resultados que si lo haces por amor a lo que estás aprendiendo, decisión de que estás en el camino correcto, voluntad y esfuerzo. Los frutos llegan pero hace falta trabajo',
        clase: 'violeta',
        id: '6',
    },
]


function Advices(){

    return(
        
        
        <section id="advices">
            <div className="contenedor">
                <h3>Consejos</h3>
                
                <div className="contenedor-advices">

                {AdvicesListData.map(({title, p, id, clase}) => <Advice key={id} title={title} p={p} clase={clase} />)}       

                </div>
            </div>

        </section>
    )
}

export default Advices



/*HAY VARIAS FORMAS DE HACER ESTO. YO ME QUEDE CON LA MAS EXPLICITA 
            
            Esta forma es sin desestructurizacion de datos:

            {AdvicesListData.map((AdvicesData) => <Advice title={AdvicesData.title} p={AdvicesData.p}  />)} 

            NOTA:   REACT nos pide tener un ID para cada elemento del objeto
            
            Así se haría desestructurando:

            {AdvicesListData.map(({title, p}) => <Advice key={id} title={title} p={p}  />)}       

            Por úlimo lo vamos a hacer usando SPREAD, que recogeria las propiedades automaticamente

            {AdvicesListData.map((AdvicesData) => <Advice key={AdvicesData.id} {...AdvicesData} />)} 
*/
        