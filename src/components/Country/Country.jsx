import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    // console.log(country);
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    // const passWithParams = () => handleVisitedCountry(country);

    // console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: <span style={{ color: visited ? 'green' : 'red' }}>{name?.common}</span></h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => handleVisitedCountry(country)}>Mark visted</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>add flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'not visited'}</button>
            {
                visited ? 'I visited this country' : 'I want to visit'
            }
        </div>
    );
};

export default Country;