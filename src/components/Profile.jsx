import React from 'react'
import { useStateValue } from '../StateProvider';
import '../styles/Profile.css';
import payment from '../img/payment.svg'
import review from '../img/review.svg'

const Profile = (props) =>{
    const [{user}] = useStateValue();
    return(
     
        <>
            <div id='container'>
                <div id='profile-header'>
                    <div id='profile-img'>
                        <img id='profile-pic' src={user?.photoURL} alt='profile'/>
                    </div>
                    <div id='profile-nav-info'>
                        <h3 id='username'>{user?.displayName}</h3>
                        <div id='address'>
                        <p id='State'><i className="fas fa-map-marker-alt"></i> New York,</p>
                        <span id='country'>&nbsp;USA</span>
                        </div>
                    </div>
                    <div id='profile-option'>
                        <div id='notification'>
                            <i className='fa fa-bell'></i>
                            <span id='alert-messages'>5</span>
                        </div>
                    </div>
                </div>
                <div id='main-bd'>
                    <div id='left-side'>
                        <div id='profile-side'>
                            <p id='mobile-number'><i className='fa fa-phone'></i>+054-444-555</p>
                            <p id='user-mail'><i className='fa fa-envelope'></i>{user?.email}</p>
                            <div id='user-bio'>
                                <p id='bio'>No matter how positive a person you are, you are not a machine.</p>
                            </div>
                            <div id='profile-btn'>
                                <button id='chatbtn'>
                                    <i className='fa fa-comment'></i>Chat
                                </button>
                                <button id='createbtn'>
                                    <i className='fa fa-plus'></i>Create
                                </button>
                            </div>
                            <div id='user-ratings'>
                                    <h3 id='rating'>4.5</h3>
                                    <div id='rate'>
                                        <div className='star'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <span id='no-user'>
                                            <span>2.34k&nbsp; reviews</span>
                                        </span>
                                    </div>
                            </div>

                        </div>
                    </div>
                    <div id='right-side'>
                        <div id='nav-profile'>
                            <ul>
                                <li  /*{onClick={tab0}}*/ className='user-post active'>Bill</li>
                                <li   /*{onClick={tab1}}*/  className='user-review active'>Reviews</li>
                                <li   /*{onClick={tab2}}*/  className='user-setting active' >Settings</li>
                            </ul>
                        </div>
                        <div id='profile-body'>
                            <div className='profile-posts tab'>
                            <h4>Bills</h4>
                                {/* <h1> Your Bills</h1> */}
                                <img src={payment} alt='Bill-image'/>
                            </div>
                            <div className='profile-revies tab'>
                                {/* <h1> Your Reviews</h1> */}
                                <h4>Reviews</h4>
                                <div id='user-ratings' style={{backgroundURL : {review}}}>
                                    <img className='reviewImg' src={review} alt=""/>
                                    <h3 id='rating'>3.5</h3>
                                    <div id='rate'>
                                        <div className='star'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                        </div>
                                        <span>Stars</span>
                                    </div>
                            </div>
                            </div>
                            <div className='profile-setting tab'>
                            <h4>Settings</h4>
                            {/* <h1> Account Settings</h1> */}
                            <p>Remind me</p><div id='profile-toggle'><button id='profile-toggle_button'></button></div>
                            <p>Authenticate</p><div id='profile-toggle'><button id='profile-toggle_button'></button></div>
                            <p>Remind me</p><div id='profile-toggle'><button id='profile-toggle_button'></button></div>
                            <p>Remind me</p><div id='profile-toggle'><button id='profile-toggle_button'></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;