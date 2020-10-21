import React from 'react'
import './footer.css'

function Footer(){

    return (

        
        <footer>
        <div className="contenedor">
            <div className="redes">
                <a href="https://www.facebook.com/Gini77o"><img src="imagenes/facebook.png" alt="imagen de facebook" /></a>
                <a href="https://github.com/DevZeppelin"><img src="imagenes/github.png" alt="imagen de github" /></a>
                <a href="https://www.linkedin.com/in/gino-pietrobon/"><img src="imagenes/linkedin.png" alt="imagen de linked in" /></a>
                <a href="https://api.whatsapp.com/send?phone=5492616708100"><img src="imagenes/whatsapp-sm.png" alt="imagen de whatsapp" /></a>


            </div>

            <div className="parrafo">
                <p>© 2020 Gino Pietrobon | Desarrollador Web Argentina. Todos los derechos reservados</p>

            </div>

        </div>

    </footer>
        
        )
    }

export default Footer