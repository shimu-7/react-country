import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry}) => {
    // console.log(country)
    const [visited, setVisited]=useState(false)
    const handleVisited=()=>{
        
            setVisited(!visited)
        
    }
    console.log(handleVisitedCountry);
    return (
        <div  className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'red'}}>name: {country.name.common}</h3>
            <h4>Official Name: {country.name.official}</h4>
            <img src={country.flags.png} alt="" />
            <p><small>Code: {country.cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark visited</button><br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {
                visited && 'I have visited this country'
            }
        </div>
    );
};

export default Country;