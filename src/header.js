import React from 'react';
import Nav from './nav'
//si no le pongo al archivo el .js el Webpack buisca e interpreta el archivo

function Header ( {children} ){
    return(

        
    <header id="top-id">
        
        <Nav />
        
        <div className="contenedor" id="contenedor-titulo-flex">
            <div className="contenedor-titulo">

                {children}
                
                <a href="#courses">CURSOS</a>
            </div>
        </div>

    </header>
)
}

export default Header;