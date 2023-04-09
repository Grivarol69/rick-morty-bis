import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions/actions";



const Card = ({
  id,
  onClose,
  image,
  name,
  species,
  gender,
  addFavorite,
  removeFavorite,
  myFavorites
}) => {
  const [ isFav, setIsFav] = useState(false);
  

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    }); 
  },[myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        image,
        name,
        species,
        gender
      });
    }
  }

  return (
    
      <div className={styles.card}>
        {
          isFav ? (
              <button onClick={handleFavorite}>❤️</button>
          ) : (
              <button onClick={handleFavorite}>🤍</button>
          )
        }
        <div className={styles.close}>
          <button onClick={() => onClose(id)}>X</button>
        </div>
        <div>
          <NavLink to={`/detail/${id}`}>
            <h2>{name}</h2>
          </NavLink>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <img src={image} alt="" className={styles.img} />
        </div>
      </div>    
    
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite : (characters) => {
      return dispatch(addFavorite(characters));
    },
  
    removeFavorite : (id) => {
      return dispatch(removeFavorite(id));
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
