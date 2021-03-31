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
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Body.png'
                part_name='BODY PARTS'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Brakes.png'
                part_name='BRAKE SYSTEM'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/segment_icons/car_accessory-icon-particular-12.png'
                part_name='CAR ACCESSORIES'
            />
            <Parts 
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Clutch.png'
                part_name='CLUTCH SYSTEM'
            />
            <div className='hide'>
                <Parts
                    imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Exhaust%20System.png'
                    part_name='EXHAUST SYSTEM'
                />
            </div>
        </div>
        <div id='parts_list2'>
        <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Engine-Cooling.png'
                part_name='COOLING SYSTEM'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Transmission.png'
                part_name='DRIVETRAIN'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Electronics.png'
                part_name='ELECTRICAL'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Engine.png'
                part_name='ENGINE PARTS'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Exhaust%20System.png'
                part_name='EXHAUST SYSTEM'
            />
            <div className='hide'>
                <Parts
                    imgSorc=''
                    part_name='GASKET & SEALS'
                />
            </div>
        </div>
        <div id='parts_list2'>
        <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Filters.png'
                part_name='FILTERS'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/segment_icons/Fasteners.png'
                part_name='FASTENERS'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/segment_icons/Lubrication_Hydraulics.png'
                part_name='LUBRICATION'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Seal_Gasket.png'
                part_name='GASKET & SEALS'
            />
            <Parts
                imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Fuel-System.png'
                part_name='FUEL SYSTEM'
            />
            <div className='hide'>
                <Parts 
                    imgSorc='https://storage.googleapis.com/spares/spares/segment_icon/Clutch.png'
                    part_name='CLUTCH SYSTEM'
                />
            </div>
        </div>
        </>
    );
};

export default Spare;