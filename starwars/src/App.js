import React from 'react';
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Characters';


function App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    const [swCharacter, setSWCharacter] = useState([]);
  
    useEffect(() => {
      console.log('React Wars');
  
      axios
        .get('https://swapi.co/api/people/')
        .then(success => {
          console.log(success.data.results);
          setSWCharacter(success.data.results);
        })
        .catch(failure => {
          console.log('Failure Message IV: Come to the Darkside. We have cookies!', failure);
        });
    }, []);

    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Wrap>
        {swCharacter.map(swperson => 
          <SWCharacters 
            name = {swperson.name} 
            birthyear = {swperson['birth_year']}
            gender = {swperson['gender']}
            height = {swperson['height']} 
            species = {swperson['species']}
            homeworld = {swperson['homeworld']}
            starships = {swperson['starships']}
            films = {swperson[films]}
          
          />
        )}
      </Wrap>     
    </div>;
}

export default App;
