import React from 'react'
import Advice from './adviceItem'
import './advice.css'

const AdvicesListData = [
    {
        title: '¿Qué lenguaje elegir?',
        p: 'Javascript es un lenguaje que se actualiza y crece junto a las comunidades de programadores. Hoy se puede hacer casi todo con JS: Webs, aplicaciones de escritorio o celular, y más.',
        clase: 'violeta',
        id: '1',
    },
    {
        title: '¿Importa el inglés?',
        p: 'Sin duda es el idioma más importante del mundo, y aprenderlo nos abrirá puertas y oportunidades. En mi programa hay técnicas para familiarizarse y aprender de manera fácil.',
        clase: 'celeste',
        id: '2',
        
    },
    {
        title: '¿Debo ir a la universidad?',
        p: 'Hoy las empresas te contratarán por tus proyectos y viendo si realmente sabés programar. Los estudios académicos nos enriquecen y también la disciplina de estudiar, pero sin duda se puede ser un gran programador sin ir a una universidad.',
        clase: 'violeta',
        id: '3',
    }
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
        