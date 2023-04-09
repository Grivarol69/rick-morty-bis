import React from 'react'
import Card from '../Card/Card'
import styles from './Cards.module.css'

const Cards = ({ characters, onClose }) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {
          characters.length && characters.map((char) => {
            return <Card 
              id={char.id}
              key={char.id} 
              name={char.name} 
              species={char.species} 
              gender={char.gender} 
              image={char.image}
              onClose={onClose}
            />
          })
        }
      </div>
    </div>
  )
}

export default Cards
