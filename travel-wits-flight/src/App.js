import React, {  useState } from 'react';
import './App.css';
import { getFlights, getHotels } from './services/api.js';

const cityToCodeMap = {           // Key value pair for city flight code and City
  "New York City": "JFK",
  "Los Angeles": "LAX",
  "London": "LHR",
  "Tokyo": "NRT",
  "Sydney": "SYD"
};




function App() {
  const [origin, setOrigin] = useState('');        // Origin entered by the user
  const [budget, setBudget] = useState(0);         // Budget entered by the user
  const [results, setResults] = useState([]);      // Best Combination of flight and hotels Result fetched 
  const [searched, setSearched] = useState(false); // Check whther user searched results or not

  const cities = ['New York City', 'Los Angeles', 'Tokyo', 'London', 'Sydney'];

  
  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(origin.toLowerCase())
  );

  const handleCityClick = (city) => {
    setOrigin(city); 
  };


  const checkOptions = async () => {
    
    const originCode = cityToCodeMap[origin];

    if(!originCode){
      alert('Enter valid City!!');
      return;
    }

    const bestCombinations = [];    // List for best Combinations

    const destinations = Object.keys(cityToCodeMap).filter(destination => destination !== origin);  //Possible destinations available based on origin (exclusing origin from the list of cities)
    
    for(const destination of destinations){
      const destinationCode = cityToCodeMap[destination];   //Flight code for the destination city
      
      //Get flights that have destination as 'destination'
      const flights = await getFlights(originCode, destinationCode);
      
      //Get hotels at the destination
      const hotels = await getHotels(destination);

      //Check the total cost and add to bestCombination if less than budget
      flights.forEach(flight=>{
        hotels.forEach(hotel => {
          const totalCost = flight.price + hotel.price_per_night; 
          
          if(totalCost <= budget){                           // Check if total Cost fall within budget
            bestCombinations.push({
              flight, 
              hotel,
              totalCost
            });
          }
        })
      })

    }

    setResults(bestCombinations);
    setSearched(true);                 //If user has searched for the flight then set it true
    
  }


  return (
    <div className="App">
      <div className ="user">
      <div className='input_user'>
        <input 
          type="text" 
          placeholder ="Origin"
          value={origin}
          onChange={(e)=>setOrigin(e.target.value)}
        />

      
        <ul style={{ listStyleType: 'none' }}>
          {origin && filteredCities.length > 0 && origin.toLowerCase() !== filteredCities[0].toLowerCase()? (
            filteredCities.map((city, index) => <li key={index} onClick={() => handleCityClick(city)} // Set the city when clicked
            style={{ cursor: 'pointer' }} >{city}</li>)
          ) : null}
        </ul>
      </div>

        <input 
          type="number" 
          placeholder= "Budget" 
          value={budget}
          onChange={(e)=>setBudget(e.target.value)}
        />

        <button
          onClick={()=>checkOptions()}
        >Check </button>

      </div>

      {results.length > 0 && 
      <div className="results">
        <h2>Best Options</h2>
        <ul style={{ listStyleType: 'none' }}>
          {results.map((result, index) => (
            <div className='f' key={index}>
              <li>
                Flight: {result.flight.from} to {result.flight.to} - ${result.flight.price} <br />
                Hotel: {result.hotel.name} - ${result.hotel.price_per_night} per night <br />
                Total Cost: ${result.totalCost}
              </li>
            </div>
          ))}
        </ul>
      </div>
      }

      {searched && results.length === 0 && 
        <div className = "results">
          <p>No results found within your budget</p>
        </div>

      }
      
    </div>
  );
}

export default App;
