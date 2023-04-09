import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Favorites.module.css';

const Favorites = () => {

  const favorites = useSelector((state) => state.myFavorites)
  
  
  return (
    <div className={styles.container}>
      {
        favorites.map(({ id, name, species, gender, image }) => {
          return <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
          />
        })
      }      
    </div>
  )
}


export default Favorites;
