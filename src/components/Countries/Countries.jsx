import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])


    function handleVisitedCountry(country) {
        console.log('add this to visit list');
        const newArray = [...visitedCountries,country];
        setVisitedCountries(newArray);

        
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h3>visited countries: {visitedCountries.length} </h3>
                <ul>
                    {
                        visitedCountries.map((country)=><li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="countries-container">

                {
                    countries.map((country) => <Country 
                    key={country.cca3}
                    handleVisitedCountry={handleVisitedCountry} country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;