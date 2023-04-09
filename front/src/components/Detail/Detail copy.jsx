import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Detail.module.css';

const Detail = () => {
  const params = useParams();
  const [character, setCharacter] = useState({});
  
  const URL_BASE = "http://localhost:3001/rickandmorty";
  // const KEY = "060c38c115a2.5349670de5fe3e852fcd";

  useEffect(() => {

    axios(`${URL_BASE}/detail/${params.id}`)
    .then((response) => setCharacter(response.data));

  }, [params.id]);

  return (
    <div className={styles.container}>
      { character.name ? (
        <>
          <h2 className={styles.text}>{character.name}</h2>
          <p className={styles.text}>{character.status}</p>
          <p className={styles.text}>{character.species}</p>
          <p className={styles.text}>{character.gender}</p>
          <p className={styles.text}>{character.origin?.name}</p>
          <img src={character.image} alt="loading" />
        </>
      ) : (
        <h3>Loading ...</h3>
      )}
    </div>
  )

}

export default Detail
