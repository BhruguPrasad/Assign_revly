import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  let navigate = useNavigate()
  let token = JSON.parse(localStorage.getItem("token")) || "";
  if (token == "") {
    alert("Please Login");
    navigate("/login")
  }
    const [doubt, setDoubt] = useState([
      { id: 1, subject: "React", time: '03:08', tutor: 'John Cena',lastPing:null },
      { id: 2, subject: "Node JS", time: '12:02', tutor: 'Steve Smith',lastPing:null },
      { id: 3, subject: "Javascript", time: '08:22', tutor: 'David Warner',lastPing:null },
    ]);

    const updateLastPing = () => {
      const updatedTutors = doubt.map((add) => ({
        ...add,
        lastPing: new Date().toLocaleTimeString(),
      }));
      setDoubt(updatedTutors)
    };
  
    useEffect(() => {
      const intervalId = setInterval(updateLastPing, 3000);
        return () => clearInterval(intervalId);
    }, [doubt]);
  return (
    <>
      <div>
      <div className="doubt-history-container">
      <h2><b>Doubt History Page</b></h2>
      <div className="doubt-list">
        {doubt.map((log) => (
          <div key={log.id} className="doubt-item">
            <div>
              <strong>Subject:</strong> {log.subject}
            </div>
            <div>
              <strong>Time:</strong> {log.time}
            </div>
            <div>
              <strong>Tutor:</strong> {log.tutor}
            </div>
            <div>
              <strong>Last Ping:</strong> {log.lastPing || 'Not available'}
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </>
  )
}

export default Dashboard
