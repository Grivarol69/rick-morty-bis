import useCharacter from '../../hooks/useCharacters';
import styles from './Detail.module.css';

const Detail = () => {
  const character = useCharacter();

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
