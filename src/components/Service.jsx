import React from 'react'
import '../styles/Service.css';
import Services from './Services'
const Service = () =>{
    return(
        <>
        <div id='main'>
            <Services 
                imgSrc='https://storage.googleapis.com/gomechanic_assets/category_icons/schedule-services-v3.svg'
                line = 'Periodic Service'
            />
            <Services
                imgSrc='https://storage.googleapis.com/gomechanic_assets/category_icons/inactive-denting-painting-v3.svg'
                line = 'Denting  Painting'
            />
            <Services
                imgSrc='https://storage.googleapis.com/gomechanic_assets/category_icons/battery-v3.svg'
                line = 'Batteries'
            />
            <Services
                imgSrc='https://storage.googleapis.com/gomechanic_assets/category_icons/inactive-insurance-v3.svg'
                line = 'Insurance'
            />
            <Services
                imgSrc='https://storage.googleapis.com/gomechanic_assets/category_icons/inactive-glass-cuatom-reair.svg'
                line = 'Glass'
            />
            <Services
                imgSrc='https://storage.googleapis.com/gomechanic_assets/category_icons/inactive-cleaning-detailing-v3.svg'
                line = 'Detailing Services'
            />
          </div>
          <div id="Map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.06482568673!2d72.9666199142153!3d19.236006351923777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bbdfc26b37a7%3A0x7c701fd72e5113f8!2sVihaan%20Honda%20Service%20Centre%20Thane!5e0!3m2!1sen!2sin!4v1608460241991!5m2!1sen!2sin" width="300px" height="200px" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
           </div>
        </>
    );
};

export default Service;