import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
//import { async } from 'q';

export default function DashBoard(){
    const [spots, setSpots] = useState([]);
    useEffect(() =>{
        async function loadSpots(){
            const user_id = localStorage.getItem('user');
            const response = await api.get('/deashboard',{
                headers:{user_id}
            });
            setSpots(response.data);

        }

        loadSpots();
    }, []);
    return (
        <>
          <ul className ="spot-list">
              {spots.map(spot => (
                  <li key={spot._id}>
                      <header style={{ backgroundImage : `url(${spot.thumbnail_url})`}}/>
                      <strong>{spot.company}</strong>
                      <span>{spot.price? `R$:${spot.price}` : "Gratis"}</span>
                  </li>
              ))}
          </ul> 
         <Link to='/new'>
            <button className ="btn">Cadastrar Novo Usuário</button> 
         </Link>
        </>

    )
}