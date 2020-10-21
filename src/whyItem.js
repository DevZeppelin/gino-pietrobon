import React from 'react'


function WhyItem ({title, img, p}){

    return (

        
        <div className="item">
                        <ul>
                            <li><img src={img} alt=""/></li>
                            <li>{title}</li>
                            <li>{p}</li>
                        </ul>
                    </div>
   
   )
}

export default WhyItem