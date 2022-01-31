import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import '../styles/Cal.css';
import firebaseApp, { db  } from "../firebase";
import Admin from "./Admin";
const Cal = () => {
  
    const [value, onDateChange] = useState(new Date());
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
      }).then(() => {
        alert('Added')
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
  
  let contactInfo = firebaseApp.database().ref("Data");
  const saveContactInfo = (newValue,radioVal,emailVal) => {
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
      Date : newValue,
      Time : radioVal,
      Email : emailVal,
    });
    }
  
    const submitForm = () => {
      db.collection('USERDATA').add({
        email : emailVal,
        date : newValue,
        time : radioVal,
      }).then(() => {
        alert(`Selected Date : ${newValue}, Selected Time : ${radioVal}, Email : ${emailVal}`);
      })
      .catch((e) => {
        console.log(e.message);
      })
      
    }

    return (
        <>
           <div className='container'>
           <h4>{NewDate}</h4>
              <div id='cal'>
                  <Calendar
                      onChange={onDateChange}
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
                    <div className='bookemailnput' onChange={onChangeEmail}>
                        <input type="email" required id="mail" name="email" value={emailVal} placeholder='Email'></input>.
                    </div>
                </div>
                <button type="button" id='submit_btn' onClick={submitForm}>BOOK</button>
          </div> 
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