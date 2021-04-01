import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/ReactCarousel.css'
const ReactCarousel = () => {
        return (
            <Carousel>
                <div className='carousel'>
                    <img src="https://l1-cms-2.images.lexus-europe.com/lexusone/lexeuenv11/Repair-M8b-1920x1080_tcm-3154-1447658.jpg" />  
                </div>
                <div className='carousel'>
                    <img src="https://s3.amazonaws.com/www.autowise.com/wp-content/uploads/2016/09/30155920/About-Vehicle-Maintenance.jpg" />
                    
                </div>
                <div className='carousel'>
                    <img src="http://www.spin-caps.com/wp-content/uploads/2018/09/car-service-key-features-A-1920x1080_tcm-3154-1323224.jpg" />
                    
                </div>
                <div className='carousel'>
                    <img src="https://oldmillautos.com/wp-content/uploads/2020/03/Vehicle-Servicing.jpg"/>
                </div>
            </Carousel>
        );
    }

    export default ReactCarousel;