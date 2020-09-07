import React from 'react'

function BlogItem({img, p, title, link}){

    return (
        
        <div className="publicacion">
                        
        <div className="contenido">
        <img src={img} alt="" />
        <h4>{title}</h4>
        <p>{p}</p>
        <a href={link}>Ver →</a>
        </div> 
        </div>

        )
    }

    export default BlogItem