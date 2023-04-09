import React, { useState } from 'react';
import styles from './Searchbar.module.css';
import { NavLink } from 'react-router-dom';

const Searchbar = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    
    setId(event.target.value);
    
  }

  return (
    <div className={styles.searchbar}>
      <nav className={styles.navbar}>
        <NavLink to='/home' className={styles.link}>Home</NavLink>
        <NavLink to='/about' className={styles.link}>About</NavLink>
        <NavLink to='/favorites' className={styles.link}>Favorites</NavLink>
      </nav>
      <div className={styles.bar}>
        <input 
          type="search" 
          onChange={handleChange}
          value={id}
          className={styles.inputSearch}
        />
        <button onClick={() => {onSearch(id); setId('')} } className={styles.btnSearch} >AGREGAR</button>
      </div>
    </div>
  )
}

export default Searchbar
