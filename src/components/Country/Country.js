import React from 'react';
import { Link } from 'react-router-dom';
const countryStyle= {
    border: '1px solid maroon',
    margin: '20px', 
    borderRadius: '20px',
    padding: '20px',
}

const Country = (props) => {
    console.log(props.country)
    const  {name, population, capital,}= props.country;
    return ( 
        <div style={countryStyle}>
            <h2>Country name: {name}</h2>
            <h3>Capital: {capital}</h3>
            <h4>Population : {population}</h4>
            <p>Name <Link to={`/country/${name}`}>Show detail of exact country : {name} </Link></p>
        </div>
    );
};

export default Country;