import React from 'react'

function Course ({link, img, p}){

    return (

        <div className="item"><a href={link}><img src={img} alt=""/></a><p>{p}</p></div>
        
    )
}

export default Course