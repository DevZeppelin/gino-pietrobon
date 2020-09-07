import React from 'react';
import BlogItem from './blogItem';
import './blog.css'

const BlogList = [

    {
        id: '1',
        img: 'imagenes/blog1.png',
        title: 'El poder de una página web',
        p: 'Toda empresa de hoy tiene su propia página web. Algunas se ven antiguas, otras mucho más modernas. Detrás de cada web está la tecnología con la que fueron construídas. La mayoría de las webs por mucho tiempo fueron construídas con Wordpress, pero hoy existen tecnologías muchísimo más potentes, rápidas, brindando una experiencia al usuario inigualable.',
        link: 'http://devzeppelin.github.io/powersis'
    },
    {
        id: '2',
        img: 'imagenes/blog2.jpg',
        title: 'Sabiendo lo básico de programación podemos crear algo único ',
        p: 'Una vez me llegó una invitación a un casamiento, era una invitación muy original, increíble y con mucha información. Para poner en práctica mis estudios me puse a hacer una invitación similar pero programada por mí. Me gustó como quedó y entendí que con poco código y buenas ideas, podemos hacer grandes cosas. Mirá como quedó mi página:',
        link: 'http://devzeppelin.github.io/InvitacionWeb'
    }

]

function Blog (){
    
    return (
        
    <section id="blog">
        <div className="contenedor">
        <h3>Blog</h3>

            <div className="contenedor-publicaciones">
                    
            {BlogList.map(({id, title, img, p, link}) => <BlogItem key={id} img={img} title={title} p={p} link={link} />)}
                    
                        
            </div>
        </div>
                        
 
    </section>
  
   )
}

export default Blog