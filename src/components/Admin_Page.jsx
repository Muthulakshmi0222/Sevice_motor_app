import '../styles/Admin_Page.css';
import React ,{ useState, useEffect } from 'react'
import { db } from '../firebase'

function Admin_Page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    db.collection('USERDATA').get()
    .then((snapshot) => {
      setData(snapshot.docs.map(doc => doc.data()))
    })
    .catch( (e) => {
      alert("can't access db",e);
      console.log(e); 
    })
  }, [data]);
  return (
    <div className="Admin">
      <div className="data">
      <ul>
      <li>
      <h3><i className='bx bxs-calendar-check'></i>Date</h3>
         {
          data.map((item) => (
                  <p>
                  {item.date}
                  </p>  
        ))}
      </li>
      <li id='email_admin'>
        <h3><i className='bx bx-time'></i>Time</h3>
        {
          data.map((item) => (
            <p>
            {item.time}
            </p>  
          ))}
        
      </li>
      <li >
        <h3><i className="far fa-envelope"></i>Email</h3>
          {data.map((item) => (
              <p>
              {item.email}
              </p>  
          ))}
      </li>
      </ul>
    </div>
    </div>
  );
}

export default Admin_Page;
