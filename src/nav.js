import React, { useRef } from 'react'
//hooks son funciones
//todos los hooks empiezan con use.
//useRef hace referencia a cualquier elemento, cualquier cosa, y utilizarlo sin necesidad de tener el evento
//cualquier elemento puede recibir la propiedad ref
//a mi elemento le paso la propiedad ref

function Nav (){ 
    
    const ref = useRef( null )
    //una buena practica cuando el valor sera mutable es ponerle el valor null
    //ref es una referencia a un valor mutable q se puyede reasignar en cualquier momento sin meterse en el estado. MUTA
    //ref recibe el valor inicial de la referencia. ej si hago: useRef ("hola ke ase") cuando haga console.log(ref) me tira "hola je ase"

    console.log(ref)

    function handleClick (){

    //esto es una forma: --> 
    //function handleClick (event){
    //console.log(event.target)

    console.log(ref.current)
    
        var menuList = document.querySelector(".lista-menu-nav");
        menuList.classList.toggle("on");
    }

    return(
        <div className="menu">
            <div className="contenedor" >
            <a href="#"><p className="logo">Gino Pietrobon</p></a>
            <body link="#1D64F2" vlink="#1D64F2" alink="#1D64F2"></body>

            <img onClick={handleClick} className="menu-icon" src="imagenes/rayitas.png" alt=""></img>
               
                <nav className="lista-menu-nav">
                    <ul className="lista-menu">
                        <li><a onClick={handleClick} href="#about"><b>AboutUs</b></a></li>
                        <li><a onClick={handleClick} href="#advices"><b>Consejos</b></a></li>
                        <li><a onClick={handleClick} href="#courses"><b>Cursos</b></a></li>
                        <li><a onClick={handleClick} href="#why"><b>¿Por qué esta escuela?</b></a></li>
                        <li><a onClick={handleClick} href="#blog"><b>Blog</b></a></li>
                        <li><a onClick={handleClick} href="#contact"><b>Contacto</b></a></li>
                    </ul>
                </nav>
            </div>
        </div>
       

    )

}

export default Nav