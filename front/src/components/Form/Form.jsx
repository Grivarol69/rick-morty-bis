import React, { useState } from 'react'
import { Validate } from '../../helpers/Validate';
import styles from './Form.module.css';

const Form = ({login}) => {

  const [userData, setUserData] = useState({
    userName: '',
    password: ''
  });

  const [ errors, setErrors ] = useState({
    userName: '',
    password: ''
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    
    setUserData({...userData, [property]: value });
    setErrors(Validate({...userData, [property]: value }));
    
  }

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  }

  return (
    <form onSubmit={submitHandler}>

      <div className={styles.cover}>
        <h1 className={styles.titulo}>Login</h1>
        {/* <label htmlFor="email">Email: </label> */}
        <input
          type="text" 
          name='userName'
          placeholder='EMAIL'
          value={userData.userName}
          onChange={handleChange}
          className={styles.inputLogin}
        />
        <span className={styles.spanError}>{errors.userName}</span>
        
        <input 
          type="text" 
          name='password'
          placeholder='PASSWORD'
          value={userData.password}
          onChange={handleChange}
          className={styles.inputLogin}
        />
        <span className={styles.spanError}>{errors.password}</span>

        <button className={styles.btnLogin}>Login</button>

        <p className={styles.text}>Or Login using</p>

        <div className={styles.altLogin}>
          <div className={styles.facebook}></div>
          <div className={styles.google}></div>
        </div>
      </div>

    </form>
  )
}

export default Form
