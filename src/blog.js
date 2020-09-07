import React from 'react';
import BlogItem from './blogItem';
import './blog.css'

const BlogList = [

    {
        id: '1',
        img: 'imagenes/blog1.png',
        title: 'Las empresas necesitan una página web que hable por ellas',
        p: 'Este es el ejemplo de una empresa tecnológica que me confió el desarrollo de su sitio web. ¿Querés ver como quedó?',
        link: 'http://devzeppelin.github.io/powersis'
    },
    {
        id: '2',
        img: 'imagenes/blog2.jpg',
        title: '¿Como sería una tarjeta de invitación estilo sitio web?',
        p: 'Una idea original y revolucionaria. Toda la información y genial diseño. Un gran evento merece una genial invitación.',
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