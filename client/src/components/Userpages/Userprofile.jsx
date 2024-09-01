import React, { useState, useEffect } from 'react';
import axios from 'axios'
const Userprofile = () => {
  const [user, setUser] = useState([]);

 // useEffect(() => {
   // const fetchUserData = async () => {
     // try {
       // const response = await fetch('http://localhost:5173/projectmswd/users'); // Replace with your API URL
        //if (!response.ok) {
          //throw new Error('Network response was not ok');
        //}
        //const data = await response.json();
        //setUser(data);
      //} catch (error) {
       // console.error('Error fetching user data:', error);
      //}
    //};

  //  fetchUserData();
  //}, []);
  useEffect(()=>{
      axios.get('http://localhost:5173/userprofile')
      .then(user => setUser(user.data))
      .catch(err => console.log(err))


  },[])
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    header: {
      fontSize: '24px',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#333',
    },
    paragraph: {
      fontSize: '18px',
      margin: '10px 0',
      color: '#555',
    },
    strong: {
      color: '#000',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>User Profile</h1>
      <p style={styles.paragraph}><strong style={styles.strong}>Name:sss</strong> {user.name}</p>
      <p style={styles.paragraph}><strong style={styles.strong}>Email:</strong> {user.email}</p>
      <p style={styles.paragraph}><strong style={styles.strong}>Password:</strong> {user.password}</p>
      <p style={styles.paragraph}><strong style={styles.strong}>Role:</strong> {user.role}</p>
    </div>
  );
};

export default Userprofile;
