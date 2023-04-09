import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { username, password } from './utils/consts';

import axios from 'axios';
import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import Searchbar from './components/Searchbar/Searchbar';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import * as actions from './redux/actions/actions';


function App(props) {
  
  const [ characters, setCharacters ] = useState([]);
  const { removeFavorite } = props;
  const { pathName } = useLocation();


  const [ access, setAccess ] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);
    
  //* EVENT HANDLERS

  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001/rickandmorty";

    // const URL_BASE = "https://be-a-rym.up.railway.app/api";
    // const KEY = "060c38c115a2.5349670de5fe3e852fcd";

    if(characters.find((char) => char.id === id)) {
      return alert('Personaje Repetido');
    }

    axios(`${URL_BASE}/onsearch/${id}`)
    .then((response) => {
      if(response.data.name) {
        setCharacters((oldData) => [ ...oldData, response.data]);
      } else {
        alert('Algo saliò mal');
      }
    })
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
    removeFavorite(id);
  }
 
  const login = (userData) => { 
    if (userData.userName === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert('Credenciales incorrectas');
    }
  }
 

  return (
    <div className={styles.background}>
      { pathName !== "/" && <Searchbar onSearch={onSearch}/> }
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route 
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={ <Favorites /> }/>
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
      <Footer />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {

    removeFavorite : (id) => {
      dispatch(actions.removeFavorite(id));
    }
  }
}

export default connect(null,mapDispatchToProps)(App);
