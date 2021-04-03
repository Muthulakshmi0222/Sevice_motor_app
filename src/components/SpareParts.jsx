import React from 'react'
import '../styles/SpareParts.css'
import Parts from './ListOfParts'
const Spare = () =>{
    return(
        <>
        <div id='parts_list1'>
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Ac.png'
                part_name='AIR CONDITIONING'
                ratings = '⭐⭐⭐'
                price = '$ 199'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Body.png'
                part_name='BODY PARTS'
                ratings = '⭐⭐⭐⭐⭐'
                price = '$ 399'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Brakes.png'
                part_name='BRAKE SYSTEM'
                ratings = '⭐⭐⭐'
                price = '$ 269'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/segment_icons/car_accessory-icon-particular-12.png'
                part_name='CAR ACCESSORIES'
                ratings = '⭐⭐⭐'
                price = '$ 239'
            />
            <Parts 
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Clutch.png'
                part_name='CLUTCH SYSTEM'
                ratings = '⭐⭐⭐⭐'
                price = '$ 69'
            />
            <div className='hide'>
                <Parts
                    imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Exhaust%20System.png'
                    part_name='EXHAUST SYSTEM'
                    ratings = '⭐⭐⭐⭐⭐'
                    price = '$ 99'
                />
            </div>
        </div>
        <div id='parts_list2'>
        <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Engine-Cooling.png'
                part_name='COOL SYSTEM'
                ratings = '⭐⭐⭐⭐'
                price = '$ 89'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Transmission.png'
                part_name='DRIVE PARTS'
                ratings = '⭐⭐⭐'
                price = '$ 665'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Electronics.png'
                part_name='ELECTR PARTS'
                ratings = '⭐⭐⭐'
                price = '$ 129'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Engine.png'
                part_name='ENGINE PARTS'
                ratings = '⭐⭐⭐'
                price = '$ 499'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Exhaust%20System.png'
                part_name='EXHAUS SYSTEM'
                ratings = '⭐⭐⭐'
                price = '$ 89'
            />
            <div className='hide'>
                <Parts
                    imgSorc=''
                    part_name='GASKET & SEALS'
                    ratings = '⭐⭐⭐⭐'
                    price = '$ 49'
                />
            </div>
        </div>
        <div id='parts_list2'>
        <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Filters.png'
                part_name='FILTER PARTS'
                ratings = '⭐⭐'
                price = '$ 19'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/segment_icons/Fasteners.png'
                part_name='FASTE PARTS'
                ratings = '⭐⭐⭐'
                price = '$ 419'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/segment_icons/Lubrication_Hydraulics.png'
                part_name='LUBRIC PARTS'
                ratings = '⭐⭐⭐'
                price = '$ 239'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Seal_Gasket.png'
                part_name='GAS SEALS'
                ratings = '⭐⭐⭐⭐⭐'
                price = '$ 49'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Fuel-System.png'
                part_name='FUEL SYSTEM'
                ratings = '⭐⭐⭐⭐'
                price = '$ 299'
            />
            <div className='hide'>
                <Parts 
                    imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Clutch.png'
                    part_name='CLUTCH SYSTEM'
                    ratings = '⭐⭐⭐⭐⭐'
                    price = '$ 199'
                />
            </div>
        </div>
        </>
    );
};

export default Spare;