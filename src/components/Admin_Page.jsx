import '../styles/Admin_Page.css';
import React ,{ useState, useEffect } from 'react'
import { db } from '../firebase'
function Admin_Page() {
  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);
  const [gmail, setGmail] = useState([]);
  useEffect(() => {
    db.collection('Date').get().then((snapshot) => {
      setDate(snapshot.docs.map(doc => doc.data()))
    })
    .catch( (e) => {
      alert("can't access db",e);
      console.log(e);
    })

     db.collection('Time').get().then((snapshot) => {
      setTime(snapshot.docs.map(doc => doc.data()))
    })
    .catch( (e) => {
      alert("can't access db",e);
      console.log(e);
    })

     db.collection('Email').get().then((snapshot) => {
      setGmail(snapshot.docs.map(doc => doc.data()))
    })
    .catch( (e) => {
      alert("can't access db",e);
      console.log(e);
    })

  }, []);

  return (
    <div className="Admin">
      <div className="data">
      <ul>
      <li>
      <h3><i className='bx bxs-calendar-check'></i>Date</h3>
      {date.map((Date) => (
                <p>
                {Date.text}
                </p>  
      ))}
      </li>
      <li>
        <h3><i className='bx bx-time'></i>Time</h3>
        {time.map((Time) => (
                <p>
                {Time.text}
                </p>  
            ))}
      </li>
      <li>
        <h3><i className="far fa-envelope"></i>Email</h3>
        {gmail.map((Gmail) => (
                <p>
                {Gmail.text}
                </p>  
        ))}
      </li>
      </ul>
    </div>
    </div>
  );
}

export default Admin_Page;
