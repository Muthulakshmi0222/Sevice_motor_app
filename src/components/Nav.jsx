import React, { useState } from 'react'
import '../styles/Nav.css'
import { Link } from "react-router-dom"; 

const Nav = () => {
  const [sideBar,setSidebar] = useState(false);

  const [showIcon,setShowIcon] = useState(false);

  const [HideIcon,setHideIcon] = useState(false);
  const showSidebar = () =>
  {
    setSidebar(!sideBar); 
  }
  const VisibleIcon = () => {
    setShowIcon(!showIcon);
  }
  const hide = () => {
    setSidebar(true);
  }
  const DarkBtn = () => {
    alert('Pleas change your device theme !')
  }
  return(

    <>
      <div id='nav'>
          <div id='logo'><h1>Honda <span id='serviceText'>Service</span></h1>
            <select>
              <option>Mumbai</option>
              <option>Thane</option>
              <option>Nashik</option>
              <option>Pune</option>
              <option>New Mumbai</option>
            </select>
            <div id="MenuIcon" className={HideIcon ? 'MenuIcon' : 'MenuIcon active'} onClick={VisibleIcon}>
                  <i id='fa-bars' className='fa fa-bars' onClick={showSidebar} ></i>
            </div>
            
          </div>
          <div id='menu' className={sideBar ? 'menu' : 'menu active'}>
            <ul>
            <div id="CrossIcon" className={showIcon ? 'CrossIcon' : 'CrossIcon active' }>
                  <i className="far fa-times-circle" onClick={hide}></i>
            </div>
              <li><Link to='/' ><i className="fas fa-home"></i>Home</Link></li>
              <li><Link exact to='/News' ><i className="fas fa-newspaper"></i>News</Link></li>
              <li><Link to='/Service' ><i className="fas fa-hammer"></i>Service</Link></li>
              <li><Link to='/SpareParts' ><i className="fas fa-tools"></i>Spare</Link></li>
              <li><Link to='/Profile' ><i className='bx bxs-user-circle'></i>Profile</Link></li>
              <li><Link to='/Login' ><i class='bx bxs-log-in-circle'></i>Signin</Link></li>
              <li><div id='toggle'>
                   <button id='toggle_button' onClick={DarkBtn}></button>  
                  <i className="fas fa-cloud-sun"></i>
                  <i className="fas fa-cloud-moon"></i>
                </div>
              </li>
            </ul>
          </div>
      </div>
    </>
  );
};

export default Nav;