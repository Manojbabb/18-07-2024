// import React from 'react'

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     padding: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '100%',
//     maxWidth: '400px',
//   },
//   label: {
//     marginBottom: '5px',
//   },
//   input: {
//     marginBottom: '15px',
//     padding: '10px',
//     fontSize: '16px',
//   },
//   button: {
//     padding: '10px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   },
//   '@media (min-width: 768px)': {
//     form: {
//       maxWidth: '500px',
//     },
//   },
// };

// const Login = () => {
//   return (
//     <div style={styles.container}>
//       <h1>Login page</h1>
//       <form style={styles.form}>
//         <label style={styles.label} htmlFor='username'>Username</label>
//         <input style={styles.input} placeholder='Enter your username' name='username' id='username'/>
//         <label style={styles.label} htmlFor='password'>Password</label>
//         <input style={styles.input} placeholder='Enter your password' name='password' id='password' type='password'/>
//         <label style={styles.label} htmlFor='secretKey'>Secret Key</label>
//         <input style={styles.input} placeholder='Enter your secret key' name='secretKey' id='secretKey'/>
//         <button style={styles.button} type='submit'>Login</button>
//       </form>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  '@media (min-width: 768px)': {
    form: {
      maxWidth: '500px',
    },
  },
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secret, setSecretKey] = useState('');
const navigate = useNavigate();

const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://localhost:5004/login', {
        username,
        password,
        secret,
      }); 
      alert(response.data);
      alert('admin data verified successfully');
      localStorage.setItem('isAuthenticated', 'true');  
      navigate('/admin');
    } catch (error) {
      alert(error.response ? error.response.data : 'Server error');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login page</h1>
      <form style={styles.form} onSubmit={handleLogin}>
        <label style={styles.label} htmlFor='username'>Username</label>
        <input
          style={styles.input}
          placeholder='Enter your username'
          name='username'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label style={styles.label} htmlFor='password'>Password</label>
        <input
          style={styles.input}
          placeholder='Enter your password'
          name='password'
          id='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label style={styles.label} htmlFor='secretKey'>Secret Key</label>
        <input
          style={styles.input}
          placeholder='Enter your secret key'
          name='secretKey'
          id='secretKey' 
          onChange={(e) => setSecretKey(e.target.value)}
        />
        <button style={styles.button} type='submit'>Login</button>
      </form>
    </div>
  );
}; 
export default Login;
