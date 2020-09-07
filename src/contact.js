 import React from 'react'
 import './contact.css'

 function Contact (){

    return(

        
        <section id="contact">

           
                    <div className="contenedor">
                    <h3>Contacto</h3>
                    
                    
                    <form action="envio-formulario.php" method="post" encType="multipart/form-data">
                   
                    <input type="text" placeholder="Nombre" name="nombre" required />
                    <input type="email" placeholder="Email" name="email" required />
                    
                    <textarea placeholder="Mensaje" name="mensaje" required></textarea>
                   
                    <input type="submit" value="ENVIAR MENSAJE" />
                    
                    
                    
                    </form>
                    
                   
                    
                    <div className="contacto-info">
                       
                        <div className="mail"><img src="imagenes/mail-icon.png" alt="" />gino.b.pietrobon@gmail.com</div>
                        <div className="whatsapp"><img src="imagenes/whatsapp-icon.png" alt="" />2616708100</div>
                    </div>

            </div>

        </section>

      )
  }

  export default Contact