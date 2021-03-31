import React from 'react'
import '../styles/Services.css';
const Services = (props) =>{
    return(
        <>
            <div id='Services'>
                <h4>{props.line}</h4>
                <img src={props.imgSrc} alt='Services'/>
            </div>
        </>
    );
};

export default Services;