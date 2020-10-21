import React from 'react'


function Advice ({title, clase, p}){
    
    const adviceClass = `advice ${clase}` 
    
    return(
        
        
        <div className={adviceClass}>
        <h4>{title}</h4>
        <p>{p}</p>
        
        <img className="ondas" src="imagenes/waves.png" alt=""/>
        </div>
        
        )
    }
    
    /*NOTA: En className puedo ingresar en corchetes la propiedad <div className={props.clase}> pero para hacerlo más específico lo hago con template literals 
    
    ASÍ SERIA UTILIZANDO SPREAD (PROPAGACION), lo cual no es buena práctica ya que, mientras MAS explícito MEJOR

   
    function Advice ({clase, title, p}){
    
        return(

       
            <div className={clase}>
                    <h4>{title}</h4>
                    <p>{p}</p>
                
                    <img className="ondas" src="imagenes/waves.png" alt=""/>
            </div>

    )
}

    ASI SERIA USANDO PROPS

    function Advice (props){
    
    const adviceClass = `advice ${props.clase}` 
    
    return(
        
        
        <div className={adviceClass}>
        <h4>{props.title}</h4>
        <p>{props.p}</p>
        
        <img className="ondas" src="imagenes/waves.png" alt=""/>
        </div>
        
        )
    }
*/

export default Advice
