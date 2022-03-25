import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [fishes,setFishes] =useState([])
  const [card,setCard] =useState([])

  const addtoCard = (fish) =>{
    const newFish = [...card,fish]
    setCard(newFish)
  }
    useEffect (() =>{
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=f')
    .then(res =>res.json())
    .then(data => setFishes(data.meals))
    },[])
  return (
    <div>
      <Navbar></Navbar>
      {
        card.map(show => <h2 key={show.idMeal}>{show.strCategory}</h2>)
      }
     <div className='fish'>
     {
       fishes.map(fish => <Card key={fish.idMeal} fish={fish} addtoCard={addtoCard}></Card>)
     }
     </div>
    </div>
  );
}

export default App;
