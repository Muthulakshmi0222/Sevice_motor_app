import React, { useState } from 'react'
import '../styles/Admin.css'
import { db  } from "../firebase";
const Admin = () => {
    const [setDate,setDateVal] = useState([]);
    const [setTime,setTimeVal] = useState([]);
    const [setEmail,setEmailVal] = useState([]);
    let Date_List = document.querySelector('#list');
    const renderDate = (doc_1) => {
        // let li = React.createElement('li');
        // ReactDOM.render(date,li);
        // ReactDOM.render(Date_List,li);
        // let date = React.createElement('h2');
        // Date_List = React.createContext(doc_1.data().text);
        setDateVal(doc_1.data().text);
    }

    const renderTime = (doc_2) => {
        setTimeVal( doc_2.data().text);
    }
    
    const renderEmail = (doc_3) => {
        setEmailVal(doc_3.data().text);
    }
    // Geetting data -- Date
    
    db.collection('Date').get().then((snapshots_1) => {
        snapshots_1.docs.forEach(doc_1 => {
            renderDate(doc_1);
        })
    })
    
    // Geetting data -- Time
    
    db.collection('Time').get().then((snapshots_2) => {
        snapshots_2.docs.forEach(doc_2 => {
            renderTime(doc_2);
        })
    })
    
    // Geetting data -- Email
    
    db.collection('Email').get().then((snapshots_3) => {
        snapshots_3.docs.forEach(doc_3 => {
            renderEmail(doc_3);
        })
    })

    return(
        <>
        <div id='admin-nav'>
            <h1><i className="fa fa-user-secret" aria-hidden="true"></i>Admin Pannel</h1>
        </div>
        <h2 id='Admin_data'>Data</h2>
        <div id='admin-Data'>
            <ul id='list'>
                {/* <li id='mail'>{setEmail}</li>
                <li id='date'>{setDate}</li>
                <li id='time'>{setTime}</li> */}
            </ul>
        </div>
        </>
    );
};

export default Admin;