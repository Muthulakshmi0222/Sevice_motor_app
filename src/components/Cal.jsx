import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import '../styles/Cal.css';
import firebaseApp, { db  } from "../firebase";
import Admin from "./Admin";
const Cal = () => {
  
    const [value, onChange] = useState(new Date());
    const [radioVal, onRadio] = useState('');
    const [emailVal, setEmailVal] = useState('');

    let newValue = value.toDateString();
    const sendMessage = (e) => {
        e.preventDefault();
        db.collection("Date").add({
        text: newValue,
    });
    newValue = ''
  };
 const sendTiming = (e) => {
    e.preventDefault();
    db.collection("Time").add({
      text : radioVal,
    });
    onRadio('')
  };
  const sendEmail = (e) => {
    e.preventDefault();
    db.collection("Email").add({
      text : emailVal,
    });
    setEmailVal('')
  };
 const onChangeRatio = (e) => {  
  onRadio(e.target.value)
  };
  const onChangeEmail = (e) => {
    setEmailVal(e.target.value)
    };

  let NewDate = value.toLocaleDateString();
  //Database 
  
  let contactInfo = firebaseApp.database().ref("Data");
  const saveContactInfo = (newValue,radioVal,emailVal) => {
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
      Date : newValue,
      Time : radioVal,
      Email : emailVal,
    });
    }
  
    const submitForm = (e) => {
      e.preventDefault();
        saveContactInfo(newValue, radioVal,emailVal);
        db.collection("Email").add({
          text : emailVal,
        });
        db.collection("Time").add({
          text : radioVal,
        });
        db.collection("Date").add({
          text: newValue,
         });
        alert(`Selected date : ${newValue} Selected Time slot : ${radioVal} and Email : ${emailVal}`)
    }

    return (
        <>
        <form className="contact-form">
           <div className='container'>
           <h4>{NewDate}</h4>
              <div id='cal'>
                  <Calendar
                      onChange={onChange}
                      value={value}
                    />
              </div>
                {/* <form>
                  <button id='setDate' onClick={sendMessage}>Set Date</button>
                </form> */}

                <div className="timing">
                    <div onChange={onChangeRatio} id='slots'>
                    <div>
                        <input type="radio" id="slot1" name="gender" value="9 to 11"></input>
                        <p>9 to 11</p>
                    </div>
                    <div>
                        <input type="radio" id="slot2" name="gender" value="12 to 2"></input>.
                        <p>12 to 2</p>
                    </div>
                    <div>
                        <input type="radio" id="slot3" name="gender" value="2 to 5"></input>.
                        <p>2 to 5</p>
                    </div>
                    </div>
                    <div onChange={onChangeEmail}>
                        <input type="email" required id="mail" name="email" value={emailVal} placeholder='Email'></input>.
                    </div>
                </div>
                <button type="submit" id='submit_btn' onClick={submitForm}>BOOK</button>
          </div> 
      </form>
      <div id='admin'>
      <Admin 
      Date = {newValue}
      Time = {radioVal}
      Email = {emailVal}
      />
      </div>
        </>
    );
};

export default Cal;